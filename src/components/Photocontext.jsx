// PhotoContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=<YOUR_API_KEY>&tags=mountains&per_page=12&format=json&nojsoncallback=1`
      );
      setPhotos(response.data.photos.photo);
    };

    fetchPhotos();
  }, []);

  return (
    <PhotoContext.Provider value={{ photos }}>
      {children}
    </PhotoContext.Provider>
  );
};
