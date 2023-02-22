// PhotoGallery.js

import React from 'react';
import Photo from './Photo';

const PhotoGallery = ({ photos }) => {
  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGallery;
