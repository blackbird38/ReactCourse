import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AlbumPage from './AlbumPage';
import SearchPage from './SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li></li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/album/:id" component={AlbumPage}>
            <AlbumPage />
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
