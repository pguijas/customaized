from diffusers import StableDiffusionXLPipeline, StableDiffusionXLImg2ImgPipeline
import torch

def inference(prompt, lora, model_base= "stabilityai/stable-diffusion-xl-base-1.0", model_refiner= "stabilityai/stable-diffusion-xl-refiner-1.0"):
   
    # Load the model
    base = StableDiffusionXLPipeline.from_pretrained(model_base).to("cuda")
    refiner = StableDiffusionXLImg2ImgPipeline.from_pretrained(model_refiner).to("cuda")

    # Load lora model for base
    base.load_lora_weights("XXXXXXXXXXXXXXXXXXXXXXXX", weight_name="XXXXXXXXXXXXXXXXXXXXXXXX")

    # Generate an image
    prompt = "A majestic lion jumping from a big stone at night"
    image = base(
        prompt=prompt,
        num_inference_steps=40,
        denoising_end=0.8,
        output_type="latent",
    ).images
    image = refiner(
        prompt=prompt,
        num_inference_steps=40,
        denoising_start=0.8,
        image=image,
    ).images

    return image[0]