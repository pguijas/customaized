'use client';

import { useState } from 'react';
import { uploadImage } from '../lib/utils';


const uploadPhoto = () => {
  const [file, setFile] = useState<File>()
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) {
      console.log('empty file');
      return;
    }
    uploadImage(file);
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input type="submit" value="Upload" />
    </form>
  )
}

export default function Home() {

  return (uploadPhoto())
}
