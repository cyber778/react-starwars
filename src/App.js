import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Details from './Details';
import Home from './Home';

import api from './axios';

export default function App() {
  const [peopele, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const nameList = useEffect(() => {
    api.get('/people/').then(({ data }) => {
      setPeople(data.results);
    });
    // setPeople(mock_map);
  }, []);

  return (
    <Router>
      <Link to="/">Home</Link>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              peopele={peopele}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}
