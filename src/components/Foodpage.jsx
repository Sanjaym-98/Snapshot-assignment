// FoodPage.js

import React, { useContext } from 'react';
import { PhotoContext } from './Photocontext';
import PhotoGallery from './Photogalery';

const FoodPage = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div>
      <h1>Food Photos</h1>
      <PhotoGallery photos={photos} />
    </div>
  );
};

export default FoodPage;
``
