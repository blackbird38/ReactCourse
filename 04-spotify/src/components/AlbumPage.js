import './App.css';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Spotify from '../util/Spotify';
import TrackList from './TrackList';
import convertMS from '../util/convertMS';
import { Link } from 'react-router-dom';

const AlbumPage = ({ match }) => {
  const { id } = match.params;

  const [albumInfo, setAlbumInfo] = useState({});
  const [albumArtists, setAlbumArtists] = useState([]);
  const [albumTracks, setAlbumTracks] = useState([]);

  useEffect(() => {
    getAlbumById(id);
    getAlbumTracksById(id);
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
        // console.log(jsonResponse);

        if (!jsonResponse) {
          // no album in the response
          return null;
        }

        const filteredAlbumData = {
          id,
          name: jsonResponse.name,
          release_date: jsonResponse.release_date.substring(0, 4),
          total_tracks: jsonResponse.total_tracks,
          artists: jsonResponse.artists,
          image: jsonResponse.images[1].url,
          pupularity: jsonResponse.popularity,
          uri: jsonResponse.uri,
        };
        // console.log('AlbumPage', filteredAlbumData);
        setAlbumInfo(filteredAlbumData);
        setAlbumArtists(jsonResponse.artists);
        return filteredAlbumData;
      })
      .catch((error) => console.log(error));
  };

  const getAlbumTracksById = (id) => {
    console.log('getAlbumTracksById');
    const accessToken = Spotify.getAccessToken();
    fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log('getAlbumTracksById jsonResponse', jsonResponse);
        if (!jsonResponse.items) {
          // no tracks in the response
          return [];
        }

        const filteredAlbumTracks = jsonResponse.items.map((track) => ({
          id: track.id,
          name: track.name,
          duration_ms: track.duration_ms,
          type: track.type,
          uri: track.uri,
        }));
        setAlbumTracks(filteredAlbumTracks);
        return filteredAlbumTracks;
      })
      .catch((error) => console.log(error));
  };

  const renderedArtists = albumArtists.map((artist) => (
    <span key={artist.id}>
      <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
    </span>
  ));

  const totalAlbumPlayTime = (tracks) => {
    const totalMS = tracks.reduce((acc, track) => {
      return acc + track.duration_ms;
    }, 0);
    return convertMS(totalMS);
  };

  return (
    <div className="album-page">
      <div className="ui grid">
        <div className="row">
          <img src={albumInfo.image} />
          <div className="album-page-header-info">
            <h1>{albumInfo.name}</h1>
            <div>by {renderedArtists} </div>
            <div>
              <span>{albumInfo.release_date}</span> ●
              <span> {totalAlbumPlayTime(albumTracks)} </span> ●
              <span> {albumTracks.length} tracks </span>
            </div>
          </div>
        </div>
        <div className="row">
          <TrackList tracks={albumTracks} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(AlbumPage);
