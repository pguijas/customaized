'use client';

import React, { useState, useEffect } from 'react';

import RoundedBox from "@/components/RoundedBox.tsx";
import PopupWindow from "@/components/PopupWindow.tsx";

import { supabaseAdmin } from '@/lib/supabase'

import imageSrc from '../../../public/selfie.jpg';

import { createProject, updateProject, viewProject, createHyperparams, uploadImage} from "../../lib/utils";






export default function Models() {

    const [info, setInfo] = useState(null);

    function retrieveJobData() {
        viewProject()
            .then(data => {
            data = data.map((item, index) => (
                {
                    id: item.id,
                    status: item.status,
                    type: item.type,
                    name: item.hyperparams.filter(hyperparam => hyperparam["name"] == "person_name")[0]["value"]
                }))
            setInfo(data);
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            });
    }
    useEffect(() => {
        retrieveJobData()
      }, []); // 

    supabaseAdmin
      .channel('jobs_updates')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'jobs' }, retrieveJobData)
      .subscribe()

    supabaseAdmin
      .channel('jobs_inserts')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'jobs' }, retrieveJobData)
      .subscribe()

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSubmitPopup = async (personName, modelName, images) => {
        console.log("Submitted values:", personName, modelName, images);

        // Jobs
        let trainJobData = {
            type: "train",
            status: "creating",
        }
        const jobId = await createProject(trainJobData)

        // Hyperparams
        let trainHyperparamsData = {
            job_id: jobId,
            name: "person_name",
            value: personName
        }
        createHyperparams(trainHyperparamsData)

        trainHyperparamsData = {
            job_id: jobId,
            name: "model_name",
            value: modelName
        }
        createHyperparams(trainHyperparamsData)

        // Images
        for (const image of images) {
            // We cannot set a dict with 
            const imageHyperparam = {
                job_id: jobId,
                name: "image",
                value: jobId + "-" + image.name
            }
            createHyperparams(imageHyperparam)

            uploadImage(image, jobId + "-" + image.name)
        }

        // Update the status of the job
        trainJobData.status = "unassigned";
        updateProject(jobId, trainJobData)

        setIsPopupOpen(false);
    };

    return (
        <div> 
            {/* Popup to launch a new training*/}
            {isPopupOpen && (
                <div className="popup-container">
                <PopupWindow
                    onClose={handleClosePopup}
                    onSubmit={handleSubmitPopup}
                />
                </div>
            )}

            {/* Card that opens the popup*/}
            <div style={{justifyContent: 'center', textAlign: 'center'}}>
                <RoundedBox onClick={() => setIsPopupOpen(true)}>
                    <p>+</p>
                    <p>Create a new model</p>
                </RoundedBox>
            </div>

            {/* Just an example of a box with an image */}
            <RoundedBox imageUrl={imageSrc.src} />

            {/* Grid of models trained */}
            {info && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    {info.map((item, index) => (
                        <RoundedBox key={index} name={item.name} status={item.status} />
                    ))}
                </div>)
            }
        </div>
    );
  }
  