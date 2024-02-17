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

import React, { useState } from 'react';
import styles from './PopupWindow.module.css'; // Assuming you have a CSS module for styling

const PopupWindow = ({ onClose, onSubmit }) => {
  const [personName, setPersonName] = useState('');  
  const [modelName, setModelName] = useState('stabilityai/stable-diffusion-xl-base-1.0');    
  const [imageFiles, setImageFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(personName, modelName, imageFiles);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
};

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        
        <form onSubmit={handleSubmit}>
        <h1>Train a model</h1>
          <label htmlFor="input1">Name</label>
          <input
            id="input1"
            type="text"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
            placeholder="e.g. John Smith"
            required
          />
          <label htmlFor="input2">Model name</label>
          <input
            id="input2"
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            placeholder="e.g. stabilityai/stable-diffusion-xl-base-1.0"
            required
          />
          <label htmlFor="images">Upload Images:</label>
          <input
            id="images"
            type="file"
            multiple
            onChange={handleImageChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupWindow;