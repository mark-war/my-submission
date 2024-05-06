// detailsPage.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import DetailsPage from '../src/components/DetailsPage/DetailsPage';
jest.mock('../src/components/DetailsPage/Details.css', () => ({}));

test('displays details of the selected university', () => {
  render(
    <MemoryRouter> {/* Wrap DetailsPage with MemoryRouter */}
      <DetailsPage />
    </MemoryRouter>
  );
});
