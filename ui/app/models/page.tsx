'use client';

import React, { useState } from 'react';

import RoundedBox from "../../components/RoundedBox";
import PopupWindow from "../../components/PopupWindow";

import imageSrc from '../../public/selfie.jpg';

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
            {/* <button onClick={() => setIsPopupOpen(true)}>Open Popup</button> */}

            {isPopupOpen && (
                <div className="popup-container">
                <PopupWindow
                    onClose={handleClosePopup}
                    onSubmit={handleSubmitPopup}
                />
                </div>
            )}

            <div style={{justifyContent: 'center', textAlign: 'center'}}>
                <RoundedBox onClick={() => setIsPopupOpen(true)}>
                    <p>+</p>
                    <p>Create a new model</p>
                </RoundedBox>
            </div>

            <RoundedBox imageUrl={imageSrc.src} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {info.map((item, index) => (
                    <RoundedBox key={index} name={item.name} status={item.status} />
                ))}
            </div>
        </div>
    );
  }
  