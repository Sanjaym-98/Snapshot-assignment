// BeachPage.js

import React, { useContext } from 'react';
import { PhotoContext } from './Photocontext';
import PhotoGallery from './Photogalery';

const BeachPage = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div>
      <h1>Beach Photos</h1>
      <PhotoGallery photos={photos} />
    </div>
  );
};

export default BeachPage;
