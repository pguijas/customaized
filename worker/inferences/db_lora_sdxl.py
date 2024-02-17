from diffusers import StableDiffusionXLPipeline, StableDiffusionXLImg2ImgPipeline
import torch
import os

def inference(prompt, lora, model_base= "stabilityai/stable-diffusion-xl-base-1.0", model_refiner= "stabilityai/stable-diffusion-xl-refiner-1.0", tmp_folder="tmp"):
   
    # Load the model
    base = StableDiffusionXLPipeline.from_pretrained(model_base).to("cuda")
    refiner = StableDiffusionXLImg2ImgPipeline.from_pretrained(model_refiner).to("cuda")

    # Load lora model for base
    base.load_lora_weights(tmp_folder, weight_name=lora)

    # Generate an image
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

    # save image
    res_path = os.path.join(tmp_folder, "result.png")
    image[0].save(res_path)

    return res_path