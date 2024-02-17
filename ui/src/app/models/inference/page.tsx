'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'


import { createProject, updateProject, viewProjectById, createHyperparams } from "@/lib/utils";

import { getResults } from '@/lib/utils'
import styles from '@/components/ResultsLayout.module.css'
import SearchComponent from '@/components/GenBar.tsx';


export default function Home() {
  
  const searchParams = useSearchParams();
  const jobId = searchParams.get('model')

  const handleSubmitPrompt = async (e) => {
    e.preventDefault()

    // Get the information necessary to perform the inference
    const job = await viewProjectById(jobId);
    // const prompt = document.getElementById('prompt_input').value;
    const prompt = e.target[0].value

    const modelName = job.hyperparams.filter(hyperparam => hyperparam["name"] == "model_name")[0]["value"];
    const tunePath = job.result_path;

    // Create the inference job
    let inferenceJobData = {
      type: "inference",
      status: "creating",
    } 
    const inferenceId = await createProject(inferenceJobData)

    // Set the hyperparams
    let inferenceHyperparamsData = {
      job_id: inferenceId,
      name: "prompt",
      value: prompt
    }
    createHyperparams(inferenceHyperparamsData)

    inferenceHyperparamsData = {
      job_id: inferenceId,
      name: "model_name",
      value: modelName
    }
    createHyperparams(inferenceHyperparamsData)

    inferenceHyperparamsData = {
      job_id: inferenceId,
      name: "tune_path",
      value: tunePath
    }
    createHyperparams(inferenceHyperparamsData)

    // Update the status of the job
    inferenceJobData.status = "unassigned";
    updateProject(inferenceId, inferenceJobData)
  }
  
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    // Llama a la función getResults y actualiza el estado con las URLs de las imágenes
    getResults().then(urls => setImageUrls(urls));
  }, []);

  return (
    <>
    <SearchComponent onSumbit={handleSubmitPrompt}/>
    <div className="w-full max-w-6xl mt-16 p-8 rounded-lg space-y-8">
      <div className={styles.grid}>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Imagen ${index}`} className={styles.gridItem} />
        ))}
      </div>
      

    </div>
    </>
  );
};