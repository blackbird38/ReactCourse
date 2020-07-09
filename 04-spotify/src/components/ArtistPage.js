import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Spotify from '../util/Spotify';
import TrackList from './TrackList';

const ArtistPage = ({ match }) => {
  const accessToken = Spotify.getAccessToken();

  const { id } = match.params;

  const [artistInfo, setArtistInfo] = useState({});

  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    getArtistById(id);
    getArtistTopTracksById(id);
  }, []);

  const getArtistById = (id) => {
    fetch(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        // console.log('getArtistById', jsonResponse);

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

  const getArtistTopTracksById = (id) => {
    fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=FR`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log('jsonResponse toptracks', jsonResponse);

        if (!jsonResponse.tracks) {
          // no track in the response
          return null;
        }

        const filteredArtistTopTracksData = jsonResponse.tracks.map((track) => {
          return {
            id,
            album: track.album,
            name: track.name,
            popularity: track.popularity,
            album: track.album,
            duration_ms: track.duration_ms,
            type: track.type,
            uri: track.uri,
          };
        });
        setTopTracks(filteredArtistTopTracksData);
        return filteredArtistTopTracksData;
      })
      .catch((error) => console.log(error));
  };

  function renderedGenres(genres) {
    genres.map((genre) => <span>{genre}</span>);
  }

  return (
    <div className="artist-page">
      <div className="ui grid">
        <div className="row">
          <div className="ui grid">
            <img src={artistInfo.image} className="rounded-full eight wide column" />
            <div className="artist-page-header-info pt-12 pl-12 eight wide column">
              <span className="text-6xl">{artistInfo.name} </span>
              <span className="text-4xl">●</span>
              <span className="text-2xl text-pink-500"> {artistInfo.type} </span>
              <div className="text-2xl pt-4">
                <span className="text-pink-500">{artistInfo.followers} </span>
                <span>followers</span> ● <span>{artistInfo.popularity}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="sixteen wide column">
            <div className="text-2xl pl-12 text-pink-500 mt-4">Top tracks</div>
            <TrackList tracks={topTracks} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(ArtistPage);
