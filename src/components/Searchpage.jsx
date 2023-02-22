// SearchPage.js

import React, { useState, useContext } from 'react';
import useHistory from 'react-router-dom';
import { PhotoContext } from './Photocontext';
import PhotoGallery from './Photogalery';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const { photos } = useContext(PhotoContext);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?q=${query}`);
    setQuery('');
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchResults = photos.filter((photo) =>
    photo.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search photos by title..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <PhotoGallery photos={searchResults} />
    </div>
  );
};

export default SearchPage;
