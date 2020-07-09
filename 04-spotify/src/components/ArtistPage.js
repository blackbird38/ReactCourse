import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Spotify from '../util/Spotify';

const ArtistPage = ({ match }) => {
  const { id } = match.params;

  const [artistInfo, setArtistInfo] = useState({});

  useEffect(() => {
    getArtistById(id);
  }, []);

  const getArtistById = (id) => {
    const accessToken = Spotify.getAccessToken();
    fetch(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);

        if (!jsonResponse) {
          // no artist in the response
          return null;
        }

        const filteredArtistData = {
          id,
          name: jsonResponse.name,
          followers: jsonResponse.followers.total,
          genres: jsonResponse.genres,
          popularity: jsonResponse.popularity,
          type: jsonResponse.type,
          image: jsonResponse.images[1].url,
          uri: jsonResponse.uri,
        };
        // console.log('AlbumPage', filteredAlbumData);
        setArtistInfo(filteredArtistData);

        return filteredArtistData;
      })
      .catch((error) => console.log(error));
  };

  function renderedGenres(genres) {
    genres.map((genre) => <span>{genre}</span>);
  }

  return (
    <div className="album-page">
      <div className="ui grid">
        <div className="row">
          <img src={artistInfo.image} />
          <div className="artist-page-header-info">
            <h1>{artistInfo.name}</h1>
            <div> </div>
            <div>
              <span>{artistInfo.type}</span> ●<span> {artistInfo.popularity} </span>●
              <span> {artistInfo.followers} followers </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md bg-gray-800">
        <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          <div className="px-4 pb-4">
            <label htmlFor="email" className="text-sm block font-bold  pb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="Johnbull@example.com"
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold pb-2">
              PASSWORD
            </label>
            <input
              type="password"
              name="email"
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default withRouter(ArtistPage);
