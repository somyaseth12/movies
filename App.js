import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import MovieDetails from './MovieDetails';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Routes>
    </Router>
  );
};

export default App;
