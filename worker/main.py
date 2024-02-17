import os
import time
from supabase import create_client, Client
import logging
logging.disable(logging.CRITICAL)
from trainers.db_lora_sdxl import train, get_args
from inferences.db_lora_sdxl import infer

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
    - sdxl de la bd
"""

# Worker Name
worker_name = "worker-1"
sleep_time = 2
tmp_folder = "tmp"
if not os.path.exists(tmp_folder):
    os.makedirs(tmp_folder)


# Create a Supabase client
url: str = os.environ.get("SUPABASE_URL") # setted with $ export SUPABASE_URL="https://<your-uuid>.supabase.co"
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

while True:
    # Find a job to process
    job = supabase.table("jobs").select("*").eq("status", -1).limit(1).execute().data
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

        # Download the images
        imgs = [ im["value"] for im in hyperparams if im["name"] == "image" ]
        if len(imgs) == 0:
            logging.error("No images found")
            supabase.table("jobs").update({"status": 100, "error_message": "No images found"}).eq("id", job[0]["id"]).execute()
            continue

        for img in imgs:
            with open(os.path.join(tmp_folder, img), 'wb') as f:
                res = supabase.storage.from_("images").download(img)
                f.write(res)

        # Train the model
        model_path = train(get_args(f"a photo of {job[0]["name"]}"))

        # Upload the fine-tuned model
        with open(model_path, 'rb') as f:
            model_name = f"model-{job[0]['id']}.safetensors"
            supabase.storage.from_("models").upload(file=f,path=model_name)

    elif job[0]["type"] == "infer":

        # Download the model 
        raise NotImplementedError("Not implemented yet")
    
    else:
        logging.error("Unknown job type")
        supabase.table("jobs").update({"status": 100, "error_message": "Unknown job type"}).eq("id", job[0]["id"]).execute()
        continue

    # Set the job as finished
    supabase.table("jobs").update({"status": 1}).eq("id", job[0]["id"]).execute()

    # Clean the tmp folder
    for file in os.listdir(tmp_folder):
        os.remove(os.path.join(tmp_folder, file))