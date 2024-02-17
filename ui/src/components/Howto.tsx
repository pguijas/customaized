/*
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
*/

import selfie from "../../public/hector-original.jpeg";
import working from "../../public/working.jpg";
import resultado from "../../public/hector-resultado.png";

export default function Howto() {
    return (
        <div className="w-full max-w-6xl mt-16 p-8 bg-gray-50 rounded-lg space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">How It Works?</h2>

            {/* Step 1: Upload your images */}
            <div className="flex items-center space-x-9 space-y-9">
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">1. Upload your images</h3>
                    <p className="pe-9 text-sm text-gray-600">
                        Start your journey to personalized AI mastery by uploading a
                        high-quality selfie. Our platform accepts a variety of image formats
                        to ensure a seamless experience.
                    </p>
                </div>
                <img
                    src={selfie.src}
                    alt="Upload your images"
                    className="rounded-lg max-w-md"
                />
            </div>

            {/* Step 2: Generate a model */}
            <div className="flex items-center space-x-9">
                <img
                    src={working.src}
                    alt="Upload your images"
                    className="rounded-lg max-w-md"
                />
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">2. Generate a model</h3>
                    <p className="pe-9 text-sm text-gray-600">
                        Start your journey to personalized AI mastery by uploading a
                        high-quality selfie. Our platform accepts a variety of image formats
                        to ensure a seamless experience.
                    </p>
                </div>
            </div>

            {/* Step 3: Download the result */}
            <div className="flex items-center space-x-9">
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">3. Download the result</h3>
                    <p className="pe-9 text-sm text-gray-600">
                        Once satisfied with the preview, easily download your personalized
                        AI-generated image. Use it across various platforms, from
                        professional portfolios to social media profiles, showcasing your
                        unique self in an entirely new light.
                    </p>
                </div>
                <img
                    src={resultado.src}
                    alt="Upload your images"
                    className="rounded-lg max-w-md"
                />
            </div>
        </div>
    );
}