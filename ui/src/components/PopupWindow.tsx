import React, { useState } from 'react';
import styles from './PopupWindow.module.css'; // Assuming you have a CSS module for styling

const PopupWindow = ({ onClose, onSubmit }) => {
  const [input1Value, setInput1Value] = useState('');   
  const [imageFiles, setImageFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input1Value, imageFiles);
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
            value={input1Value}
            onChange={(e) => setInput1Value(e.target.value)}
            placeholder="Name of your model"
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