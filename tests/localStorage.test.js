// Import the function for data retrieval from local storage
import { getFromLocalStorage } from '../src/utils/localStorage';

// Create a mock for localStorage
const localStorageMock = (() => {
    let store = {};
  
    return {
      getItem: (key) => store[key],
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      }
    };
  })();
  
  // Configure Jest to use the mock for localStorage
  beforeEach(() => {
    global.localStorage = localStorageMock;
  });
  
  describe('Data Retrieval', () => {
    it('retrieves data from local storage', () => {
      // Mock data stored in local storage
      const storedData = [{ id: 1, name: 'University 1' }, { id: 2, name: 'University 2' }];
  
      // Set the data in the mock localStorage
      localStorage.setItem('universities', JSON.stringify(storedData));
  
      // Call the function to retrieve data from local storage
      const retrievedData = getFromLocalStorage('universities');
  
      // Check if the retrieved data matches the stored data
      expect(retrievedData).toEqual(storedData);
    });
  });