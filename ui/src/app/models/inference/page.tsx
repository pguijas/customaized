'use client';

import { useState, useEffect } from 'react';

interface DynamicImageProps {
  src: string;
  alt: string;
}

const DynamicImage: React.FC<DynamicImageProps> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  useEffect(() => {
    const loadImage = async () => {
      try {
        //const {data} = supabaseAdmin.storage.from('test_bucket').getPublicUrl(src)
        const response = await fetch(src);
        if (response.ok) {
          setImageSrc(src);
        } else {
          console.error('Failed to load image:', response.statusText);
        }
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };
    loadImage();
  }, [src]);
  if (!imageSrc) return;
  return <img src={imageSrc} alt={alt} />;
};

export {DynamicImage};

export default function Home() {
    return (
        <div>
            <DynamicImage src='https://gvvrmhpfkcshsukokpag.supabase.co/storage/v1/object/public/test_bucket/public/img1.png' alt='Result'/>
        </div>
    )
  }  