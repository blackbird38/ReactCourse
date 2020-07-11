import './App.css';
import React, { useState, useEffect } from 'react';
import Spotify from '../util/Spotify';
import SearchBar from './SearchBar';
import AlbumList from './AlbumList';
import Loading from './Loading';

function SearchPage() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    search('Enya');
  }, []);

  const search = (term) => {
    const accessToken = Spotify.getAccessToken();
    fetch(`https://api.spotify.com/v1/search?type=album&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.albums) {
          // no album in the response
          return [];
        }
        const filteredAlbums = jsonResponse.albums.items.map((album) => ({
          id: album.id,
          name: album.name,
          release_date: album.release_date,
          total_tracks: album.total_tracks,
          artists: album.artists,
          image: album.images[1].url,
          uri: album.uri,
        }));
        setSearchResult(filteredAlbums);
        return filteredAlbums;
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <SearchBar search={search} />
      {searchResult.length > 0 ? <AlbumList albums={searchResult} /> : <Loading />}
    </div>
  );
}

export default SearchPage;
