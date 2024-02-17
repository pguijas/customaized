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
    <div className="w-full max-w-6xl mt-16 p-8 bg-gray-50 rounded-lg space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Resultados Generados</h2>
      <div className={styles.grid}>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Imagen ${index}`} className={styles.gridItem} />
        ))}
      </div>
      <input placeholder="Escribe tu próximo prompt aquí"
        className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100 border-gray-600 placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        defaultValue="" required/>
      <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
      <button type="button"
              className="text-white bg-gradient-to-r bg-blue-500 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Send Prompt
      </button>
      </div>
    </div>
  );
};
