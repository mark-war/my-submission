// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListingPage from './components/ListingPage/ListingPage';
import DetailsPage from './components/DetailsPage/DetailsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" Component={ListingPage} />
      <Route path="/details/:name" Component={DetailsPage} />
    </Routes>
  </Router>
);

export default App;
