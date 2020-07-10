import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AlbumPage from './AlbumPage';
import SearchPage from './SearchPage';
import ArtistPage from './ArtistPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="ui inverted segment top fixed menu">
          <ul className="ui inverted pointing secondary menu">
            <li></li>
            <li className="header item">
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/album/:id" component={AlbumPage}>
            <AlbumPage />
          </Route>
          <Route exact path="/artist/:id" component={ArtistPage}>
            <ArtistPage />
          </Route>
          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
