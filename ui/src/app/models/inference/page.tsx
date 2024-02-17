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

'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'

import { supabaseAdmin } from '@/lib/supabase'
import { createProject, updateProject, viewProjectById, createHyperparams, getInferenceResults } from "@/lib/utils";

import SearchComponent from '@/components/GenBar.tsx';
import RoundedBox from '@/components/RoundedBox';


export default function Home() {
  
  const searchParams = useSearchParams();
  const jobId = searchParams.get('model')

  supabaseAdmin
      .channel('jobs_updates')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'jobs' }, retrieveInferenceResults)
      .subscribe()

  supabaseAdmin
      .channel('jobs_inserts')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'jobs' }, retrieveInferenceResults)
      .subscribe()

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
      type: "infer",
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

  async function retrieveInferenceResults() {
    // Llama a la función getResults y actualiza el estado con las URLs de las imágenes
    const inferenceFiles = await getInferenceResults(jobId)
    console.log("Inference files:", inferenceFiles);
    const urls = inferenceFiles?.map((url) => 
      (url === "" || !url) ? "" : supabaseAdmin.storage.from('results').getPublicUrl(url).data.publicUrl);
    console.log("URLs", urls);
    setImageUrls(urls);
  }

  useEffect(() => {
    retrieveInferenceResults();
  }, []);

  return (
    <>
    <SearchComponent onSumbit={handleSubmitPrompt}/>


    <div className="w-full mt-16">
      <div style={{ justifyContent: 'center', display: 'grid', gridTemplateColumns: 'repeat(4, .2fr)', gap: '15px' }}>
        {imageUrls.map((url, index) => (
              // <img key={index} src={url} alt={`Imagen ${index}`} className={styles.gridItem} />
              url == "" ? <RoundedBox key={index} status="running"/> : 
              <RoundedBox key={index} imageUrl={url} onClick={() => window.open(url, '_blank')}/>
            ))}
      </div>
    </div>    
    </>
  );
};