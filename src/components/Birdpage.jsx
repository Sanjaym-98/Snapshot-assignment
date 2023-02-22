// BirdPage.js

import React, { useContext } from 'react';
import { PhotoContext } from './Photocontext';
import PhotoGallery from './Photogalery';

const BirdPage = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div>
      <h1>Bird Photos</h1>
      <PhotoGallery photos={photos} />
    </div>
  );
};

export default BirdPage;
