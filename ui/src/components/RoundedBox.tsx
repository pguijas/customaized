'use client';

import React, { ReactNode, useState } from 'react';
import styles from './RoundedBox.module.css';

import sandClock from '../../public/sand_clock.png';
import redCross from '../../public/red_cross.png';
import loadingImage from '../../public/loading.gif';



interface RoundedBoxProps {
  status?: ReactNode;
  name?: ReactNode;
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

  const box_style_bg = imageUrl ? ({
    backgroundImage: `url(${imageUrl})`
    
  }) : {};

  return (
    <>    


    <div className={styles.boxContainer} onClick={handleClick} style={box_style_bg}>
      {children ? (

      <div className={styles.content}>{children}</div>
      ) :

      (
        <div className={styles.content}>
          
          {status === 'running' ? (
          <div className='flex space-x-2 justify-center items-center h-screen'>
            <span className='sr-only'>Loading...</span>
             <div className='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
           <div className='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
           <div className='h-3 w-3 bg-black rounded-full animate-bounce'></div>
         </div>


          ) : status === 'error' ? (
            <img src={redCross.src} alt="Error" />

          ) : status === 'unassigned' ? (
            <img src={sandClock.src} alt="Unassigned" />
          ) :
          
          (
            <div className={styles.status}>{status}</div>
          )}
          <div className={styles.name}>{name}</div>
        </div>
      )}
    </div>
    </>
  );
};

export default RoundedBox;