import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Favorites from './components/favorites'
import MovieList from './components/MovieList'; 
import SearchBar from './components/SearchBar'


///Llamadas a home para hacer funcionar el front

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchBar" element={<SearchBar />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path='/favorites' element={<Favorites/>}/>

      </Routes>
    </Router>
  );
}

export default App;
