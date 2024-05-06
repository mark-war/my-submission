import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input className='search-input'
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
