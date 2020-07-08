import './App.css';
import React, { useState } from 'react';
import Spotify from '../util/Spotify';
import SearchBar from './SearchBar';
import AlbumList from './AlbumList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const search = (term) => {
    setSearchTerm(term);
    const searchResult = Spotify.search(term);
    console.log(searchResult);
  };

  return (
    <div className="App">
      <SearchBar search={search} />
      <AlbumList />
    </div>
  );
}

export default App;
