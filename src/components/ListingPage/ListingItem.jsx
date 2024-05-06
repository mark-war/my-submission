import React, { useState } from 'react';
import './Listing.css';

const ListingItem = ({ university, onDelete, onItemClick }) => {
  const { id, name, country, web_pages } = university;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleting(true); // Set deletion state to true
    onDelete(name);
  };

  const handleItemClick = () => {
    onItemClick(name);
  };

  return (
    <div className={`listing-item ${isDeleting ? 'fade-out' : ''}`}>
      <div className="listing-item-info">
        <h2>{name}</h2>
        <p>Country: {country}</p>
        <p>Website: <a href={web_pages[0]} target="_blank" rel="noopener noreferrer">{web_pages[0]}</a></p>
      </div>
      <div className="listing-item-actions">
        <button onClick={handleItemClick}>View Details</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default ListingItem;
