// apiService.test.js

import { fetchUniversities } from '../src/services/apiService';
import fetchMock from 'jest-fetch-mock';
import responseData from '../src/assets/uni-list.json'

// Mock the fetch function before each test
beforeEach(() => {
    fetchMock.resetMocks();
  });

describe('fetchUniversities', () => {
  it('fetches universities data from the API', async () => {
    // Mock the axios get function to return a resolved promise with the response data
    fetchMock.mockResponseOnce(responseData);

    // Call the function to fetch universities data
    const universities = await fetchUniversities();

    // Check if the fetched data matches the response data
    expect(universities).toEqual(responseData);
  });
});
