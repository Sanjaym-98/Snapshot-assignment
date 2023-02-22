// MountainPage.js

import React, { useContext } from 'react';
import { PhotoContext } from './Photocontext';
import PhotoGallery from './Photogalery';

const MountainPage = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div>
      <h1>Mountain Photos</h1>
      <PhotoGallery photos={photos} />
    </div>
  );
};

export default MountainPage;
