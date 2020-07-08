import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Spotify from '../util/Spotify';

const AlbumPage = ({ match }) => {
  const { id } = match.params;

  const [albumInfo, setAlbumInfo] = useState({});

  useEffect(() => {
    console.log(id);
    getAlbumById(id);
  }, []);

  const getAlbumById = (id) => {
    const accessToken = Spotify.getAccessToken();
    fetch(`https://api.spotify.com/v1/albums/${id}`, {
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
          // no album in the response
          return null;
        }

        const filteredAlbumData = {
          id,
          name: jsonResponse.name,
          release_date: jsonResponse.release_date,
          total_tracks: jsonResponse.total_tracks,
          artists: jsonResponse.artists,
          image: jsonResponse.images[1].url,
          pupularity: jsonResponse.popularity,
          uri: jsonResponse.uri,
        };
        console.log('Spotify', filteredAlbumData);
        setAlbumInfo(filteredAlbumData);
        return filteredAlbumData;
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>{id}</h1>
      {albumInfo.name}
    </div>
  );
};

export default withRouter(AlbumPage);
