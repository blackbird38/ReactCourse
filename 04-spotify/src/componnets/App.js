import './App.css';
import React from 'react';
import Spotify from '../util/Spotify';

function App() {
  console.log(Spotify.getAccessToken());

  return <div className="App"></div>;
}

export default App;
