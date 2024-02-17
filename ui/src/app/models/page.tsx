'use client';

import React, { useState, useEffect } from 'react';

import RoundedBox from "../../components/RoundedBox.tsx";
import PopupWindow from "../../components/PopupWindow.tsx";

import imageSrc from '../../../public/selfie.jpg';

import { viewProject } from "../../lib/utils";


export default function Models() {

    const [info, setInfo] = useState(null);

    useEffect(() => {
        viewProject()
          .then(data => {
            data = data.map((item, index) => (
                {
                    id: item.id,
                    status: item.status,
                    type: item.type,
                    name: item.hyperparams.filter(hyperparam => hyperparam["name"] == "person_name")[0]["value"]
                }))
            console.log(data)
            setInfo(data);
            })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []); // 


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSubmitPopup = (input1Value, input2Value) => {
        console.log("Submitted values:", input1Value, input2Value);
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
  