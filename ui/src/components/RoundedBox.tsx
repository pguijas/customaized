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

'use client';

import React, { ReactNode, useState } from 'react';
import styles from './RoundedBox.module.css';

import redCross from '../../public/red_cross.png';



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
          
          {status === 'running' || status === 'unassigned' ? (
          <div className='flex space-x-2 justify-center items-center h-screen'>
            <span className='sr-only'>Loading...</span>
             <div className='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
           <div className='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
           <div className='h-3 w-3 bg-black rounded-full animate-bounce'></div>
         </div>


          ) : status === 'error' ? (
            <img src={redCross.src} alt="Error" />

          ) :
          (
            <div className={styles.status}></div>
          )}

          {name &&  
            <div className="min-h-10 rounded flex items-center justify-center bg-black bg-opacity-60 text-white p-6 rounded-lg">
              <h1 className="text-xl">{name}</h1>
            </div> 
          }
          
        </div>
      )}
    </div>
    </>
  );
};

export default RoundedBox;