import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFromLocalStorage } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import './Details.css';

const DetailsPage = () => {
    const history = useNavigate();
  const { name } = useParams();
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    // Fetch university details from local storage or API
    const fetchUniversityDetails = () => {
      // First, try to get university details from local storage
      const cachedData = getFromLocalStorage('universities');
      if (cachedData) {
        const foundUniversity = cachedData.find((uni) => uni.name === name);
        if (foundUniversity) {
          setUniversity(foundUniversity);
          return;
        }
      }
    };

    fetchUniversityDetails();
  }, [name ? name.trim() : '']);

  if (!university) {
    return <div>Loading...</div>; // Display a loading indicator while data is being fetched
  }

  const handleReturnClick = () => {
    history('/');
  };

  return (
    <div className='detail-container'>
    <div className='detail-box'>
      <h1>{university.name}</h1>
      <p>Country: {university.country}</p>
      <p>Website: <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">{university.web_pages[0]}</a></p>
      <div className="detail-box-actions">
        <button onClick={handleReturnClick}>Return To List</button>
      </div>
    </div>
    </div>
  );
};

export default DetailsPage;
