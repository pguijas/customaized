'use client';

import React, { useState } from 'react';

import RoundedBox from "../../components/RoundedBox.tsx";
import PopupWindow from "../../components/PopupWindow.tsx";

import imageSrc from '../../../public/selfie.jpg';

export default function Models() {
    const info = [
        {status:"training", name: "Model1"},
        {status:"training", name: "Model2"},
        {status:"training", name: "Model3"},
        {status:"finished", name: "Model4"},
        {status:"finished", name: "Model5"},
        {status:"finished", name: "Model6"},
        {status:"finished", name: "Model7"},
    ]

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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {info.map((item, index) => (
                    <RoundedBox key={index} name={item.name} status={item.status} />
                ))}
            </div>
        </div>
    );
  }
  