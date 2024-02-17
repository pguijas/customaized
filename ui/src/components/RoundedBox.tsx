'use client';

import React, { ReactNode, useState } from 'react';
import styles from './RoundedBox.module.css';
import loadingImage from '../../public/loading.gif';

interface RoundedBoxProps {
  status: ReactNode;
  name: ReactNode;
  children?: ReactNode;
  imageUrl?: string;
  onClick?: () => void; 
}

const RoundedBox: React.FC<RoundedBoxProps> = ({ status, name, imageUrl, children, onClick }) => {
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={styles.boxContainer} onClick={handleClick}>
      {imageUrl ? (
        <img src={imageUrl} className={styles.image} alt="Image" />
      ) : children ? (

      <div className={styles.content}>{children}</div>
      ) :

      (
        <div className={styles.content}>
          {status === 'training' ? (
            <img src={loadingImage.src} alt="Loading" />
          ) : (
            <div className={styles.status}>{status}</div>
          )}
          <div className={styles.name}>{name}</div>
        </div>
      )}
    </div>
    // <div className={styles.boxContainer}>
    //   {imageUrl ? (
    //     <img src={imageUrl} className={styles.image} alt="Image" />
    //   ) : (
    //     <div className={styles.content}>
    //       <div className={styles.status}>{status}</div>
    //       <div className={styles.name}>{name}</div>
    //     </div>
    //   )}
    // </div>
    // <div className={styles.boxContainer}>
    //   {imageUrl ? (
    //     <img src={imageUrl} className={styles.image} alt="Image" />
    //   ) : (
    //     <div className={styles.content}>{children}</div>
    //   )}
    // </div>
  );
};

export default RoundedBox;