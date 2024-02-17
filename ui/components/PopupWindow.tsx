import React, { useState } from 'react';
import styles from './PopupWindow.module.css'; // Assuming you have a CSS module for styling

const PopupWindow = ({ onClose, onSubmit }) => {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input1Value, input2Value);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input1Value}
            onChange={(e) => setInput1Value(e.target.value)}
            placeholder="Input 1"
          />
          <input
            type="text"
            value={input2Value}
            onChange={(e) => setInput2Value(e.target.value)}
            placeholder="Input 2"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupWindow;
