import os
import time
from supabase import create_client, Client
import logging
from trainers.db_lora_sdxl import train, get_args
from inferences.db_lora_sdxl import inference

"""
export SUPABASE_URL="https://onquttuaucnydonwfoul.supabase.co"
export SUPABASE_KEY=""

Tables:
    - jobs
        - id
        - created_at
        - type
        - status
        - worker_assigned
        - model_name
        - result_path
        - error_message
    - hyperparams
        - job_id
        - param_name
        - value

Cosas:
    - mirar de hashear cosas y así para que no pueda haber duplicados
    - cachear

Limpiar cosas que no necesitamos como:
    - sdxl de la bd -> meterle realitic vision (al final)

Poner validation solo si modo debug

cambiar status a unassinged/running/finished/error
"""

# Worker Name
worker_name = "worker-1"
sleep_time = 2
tmp_folder = "tmp"
epochs = 160
if not os.path.exists(tmp_folder):
    os.makedirs(tmp_folder)
debug = True
if not debug:
    logging.basicConfig(level=logging.CRITICAL)

# Create a Supabase client
url: str = os.environ.get("SUPABASE_URL") # setted with $ export SUPABASE_URL="https://<your-uuid>.supabase.co"
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

def get_param_from_query(query, param, only_one=True):
    res = [ p["value"] for p in query if p["name"] == param ]

    # Check
    if len(res) == 0:
        raise ValueError(f"Parameter {param} not found")

    # Return
    if only_one:
        return res[0]
    return res

while True:
    # Find a job to process (first come, first served)
    job = supabase.table("jobs").select("*").eq("status", -1).order("created_at", desc=False).range(0, 1).execute().data
    if job == []:
        print(f"No jobs to process (sleeping for {sleep_time} seconds)")
        time.sleep(sleep_time)
        continue

    # Set the job as assigned to this worker
    print(f"Assigning job {job[0]['id']} to {worker_name}")
    supabase.table("jobs").update({"worker_assigned": worker_name, "status": 0}).eq("id", job[0]["id"]).execute()

    # Load the images (and hyperparameters) from the job
    hyperparams = supabase.table("hyperparams").select("*").eq("job_id", job[0]["id"]).execute().data

    # Perform the job
    if job[0]["type"] == "train":

        # Get hyperparameters
        logging.info("Getting hyperparameters")
        try:
            # Training images
            imgs = get_param_from_query(hyperparams, "image", only_one=False)
            # Model name
            model_name = get_param_from_query(hyperparams, "model_name")
            # Person name
            person_name = get_param_from_query(hyperparams, "person_name")
        
        except ValueError as e:
            logging.error(f"Error: {e}")
            supabase.table("jobs").update({"status": 100, "error_message": str(e)}).eq("id", job[0]["id"]).execute()
            continue

        # Download the images
        logging.info(f"Downloading {len(imgs)} images")
        for img in imgs:
            with open(os.path.join(tmp_folder, img), 'wb') as f:
                res = supabase.storage.from_("images").download(img)
                f.write(res)

        # Train the model
        logging.info("Training the model")
        if not debug:
            validation_epochs = 99999999999
        try:
            model_path = train(get_args(f"a photo of {person_name} the person", instance_data_dir=tmp_folder, model=model_name, num_train_epochs=epochs))
        except Exception as e:
            logging.error(f"Error: {e}")
            supabase.table("jobs").update({"status": 100, "error_message": str(e)}).eq("id", job[0]["id"]).execute()
            continue

        # Upload the fine-tuned model
        with open(model_path, 'rb') as f:
            model_name = f"model-{job[0]['id']}.safetensors"
            supabase.storage.from_("models").upload(file=f,path=model_name)

    elif job[0]["type"] == "infer":

        # Download the model (job result_path)
        try: 
            model_name = get_param_from_query(hyperparams, "model_name")
            tune_path = get_param_from_query(hyperparams, "tune_path")
            prompt = get_param_from_query(hyperparams, "prompt")
        except ValueError as e:
            logging.error(f"Error: {e}")
            supabase.table("jobs").update({"status": 100, "error_message": str(e)}).eq("id", job[0]["id"]).execute()
            continue
        
        # Check tune_path
        with open(os.path.join(tmp_folder, tune_path), 'wb') as f:
            res = supabase.storage.from_("models").download(tune_path)
            if res is None:
                logging.error("Model not found")
                supabase.table("jobs").update({"status": 100, "error_message": "Model not found"}).eq("id", job[0]["id"]).execute()
                continue 
            f.write(res)

        # Perform the inference
        try:
            res_path = inference(prompt, tune_path, model_base=model_name, tmp_folder=tmp_folder)
        except Exception as e:
            logging.error(f"Error: {e}")
            supabase.table("jobs").update({"status": 100, "error_message": str(e)}).eq("id", job[0]["id"]).execute()
            continue

        # Upload the result
        with open(res, 'rb') as f:
            result_name = f"result-{job[0]['id']}.png"
            supabase.storage.from_("results").upload(file=f,path=result_name)
    
    else:
        logging.error("Unknown job type")
        supabase.table("jobs").update({"status": 100, "error_message": "Unknown job type"}).eq("id", job[0]["id"]).execute()
        continue

    # Set the job as finished
    supabase.table("jobs").update({"status": 1}).eq("id", job[0]["id"]).execute()

    # Clean the tmp folder
    for file in os.listdir(tmp_folder):
        os.remove(os.path.join(tmp_folder, file))