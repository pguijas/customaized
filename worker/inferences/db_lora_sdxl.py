'''
Copyright 2024 Pedro Guijas Bravo, Ángel Miguélez Millos, Elena Sánchez González, Héctor Padín Torrente 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
'''

from diffusers import StableDiffusionXLPipeline, StableDiffusionXLImg2ImgPipeline
import torch
import os

def inference(prompt, lora, model_base= "stabilityai/stable-diffusion-xl-base-1.0", model_refiner= "stabilityai/stable-diffusion-xl-refiner-1.0", tmp_folder="tmp"):
   
    # Load the model
    base = StableDiffusionXLPipeline.from_pretrained(model_base).to("cuda")
    base.load_lora_weights(os.path.join(tmp_folder, lora))
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