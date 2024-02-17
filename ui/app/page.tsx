import Link from "next/link";
import React from "react";
import Howto from "../components/Howto";

export default async function Page() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-black">
        CustomAIzed
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Welcome to CustomAIzed, where your selfies become the canvas for
        cutting-edge artificial intelligence! Unleash the power of customization
        as we transform your ordinary self-portraits into extraordinary
        AI-generated images. Our web app merges creativity with technology,
        bringing you a unique and personalized experience like never before.
      </p>
      <div>
        <Link href="/login">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
        <div className="mt-4 text-gray-500">
          <span>Already a member? </span>
          <Link className="text-blue-600 hover:underline" href="/login">
            Sign In
          </Link>
        </div>
      </div>
      <hr className="my-9 border-gray-200" />
      <Howto />
    </div>
  );
}
