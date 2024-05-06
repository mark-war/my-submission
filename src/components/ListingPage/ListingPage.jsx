import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUniversities } from '../../services/apiService'
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';
import ListingItem from './ListingItem';
import SearchBar from '../SearchBar/SearchBar';
import './Listing.css';

const ListingPage = () => {
  const history = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  // Fetch data from API and store in local storage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUniversities();
        setUniversities(data);        
        saveToLocalStorage('universities', data);
        setFilteredUniversities(data); // Set initial filtered data
        console.log(data)
      } catch (error) {
        // Handle API failure
        console.error('Failed to fetch data from API:', error);
        const cachedData = getFromLocalStorage('universities');
        if (cachedData) {
          setUniversities(cachedData);
          setFilteredUniversities(cachedData); // Set initial filtered data
        } else {
          // Display error message to the user
          alert('Failed to fetch data from API. Please try again later.');
        }
      }
    };

    fetchData();
  }, []);

  // Filter universities based on search input
  const handleSearch = (query) => {
    const filtered = universities.filter((uni) =>
      uni.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUniversities(filtered);
  };

// State variable to track the current sort order
const [sortOrder, setSortOrder] = useState('asc'); // Default is ascending order


// Sort universities alphabetically
const handleSort = () => {
    // Toggle the sort order between ascending and descending
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  
    // Perform sorting based on the current sort order
    const sorted = [...filteredUniversities].sort((a, b) => {
      if (newSortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  
    // Update the sort order state
    setSortOrder(newSortOrder);
    
    // Update the filtered universities with sorted data
    setFilteredUniversities(sorted);
  };

  // Delete a university from the list
  const handleDelete = (name) => {
    const updatedList = filteredUniversities.filter((uni) => uni.name !== name);
    setFilteredUniversities(updatedList);
    // Optionally, you can update local storage here
  };

  // Handle click on a university item
  const handleItemClick = (name) => {
    history(`/details/${name}`);
  };

  return (
    <div className="listing-page">
      <h1>University Listing</h1>
      <SearchBar onSearch={handleSearch} />
      <button className='sort-button' onClick={handleSort}>Sort Alphabetically</button>
      <div className="listing-container">
        {filteredUniversities.map((uni) => (
          <ListingItem
            key={uni.name}
            university={uni}
            onDelete={handleDelete}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
