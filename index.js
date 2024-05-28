import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MovieDetails from './MovieDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Homepage" exact component={HomePage} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Routes>
    </Router>
  );
};

export default App;
