import React, { useState } from 'react';
import styles from './PopupWindow.module.css'; // Assuming you have a CSS module for styling

const PopupWindow = ({ onClose, onSubmit }) => {
  const [personName, setPersonName] = useState('');  
  const [modelName, setModelName] = useState('');    
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
          />
          <label htmlFor="input2">Model name</label>
          <input
            id="input2"
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            placeholder="e.g. stabilityai/stable-diffusion-xl-base-1.0"
          />
          <label htmlFor="images">Upload Images:</label>
          <input
            id="images"
            type="file"
            multiple
            onChange={handleImageChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupWindow;