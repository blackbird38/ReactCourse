import './App.css';
import React from 'react';
import Spotify from '../util/Spotify';
import SearchBar from './SearchBar';

function App() {
  console.log(Spotify.getAccessToken());
  console.log(Spotify.search('Enya'));
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
