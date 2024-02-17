'use client';

import { useState, useEffect } from 'react';
import { getResults } from '../../../lib/utils'
import styles from '../../../components/ResultsLayout.module.css'

export default function Home() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    // Llama a la función getResults y actualiza el estado con las URLs de las imágenes
    getResults().then(urls => setImageUrls(urls));
  }, []);

  return (
    <div className={styles.gridContainer}>
      <h1>Lista de Imágenes</h1>
      <div className={styles.grid}>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Imagen ${index}`} className={styles.gridItem} />
        ))}
      </div>
    </div>
  );
};