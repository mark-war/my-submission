// apiService.js

const API_URL = 'http://universities.hipolabs.com/search?country=United%20Arab%20Emirates';

// Function to fetch data from the API
export const fetchUniversities = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
