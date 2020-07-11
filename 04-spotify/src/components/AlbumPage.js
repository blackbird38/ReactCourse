import './App.css';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Spotify from '../util/Spotify';
import TrackList from './TrackList';
import convertMS from '../util/convertMS';
import Loading from './Loading';

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
        setAlbumInfo(filteredAlbumData);
        setAlbumArtists(jsonResponse.artists);
        return filteredAlbumData;
      })
      .catch((error) => console.log(error));
  };

  const getAlbumTracksById = (id) => {
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
        if (!jsonResponse.items) {
          // no tracks in the response
          return [];
        }

        const filteredAlbumTracks = jsonResponse.items.map((track) => ({
          id: track.id,
          name: track.name,
          duration_ms: track.duration_ms,
          mp3: track.preview_url,
          type: track.type,
          uri: track.uri,
          artists: track.artists,
          album: albumInfo.image,
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
      {albumInfo ? (
        <div className="ui grid">
          <div className="row">
            <div className="sixteen wide column">
              <div className="ui grid">
                <img src={albumInfo.image} className="album-image" />
                <div className="album-page-header-info pt-4">
                  <span className="text-2xl">{albumInfo.name}</span>
                  <div>
                    by <span className="text-pink-500">{renderedArtists}</span>
                  </div>
                  <div>
                    <span>{albumInfo.release_date}</span> ●
                    <span> {totalAlbumPlayTime(albumTracks)} </span> ●
                    <span> {albumTracks.length} tracks </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="sixteen wide column">
              <div className="text-2xl pl-12 text-pink-500 mt-4 mb-4">Tracks</div>
              <TrackList tracks={albumTracks} imageAlbum={albumInfo.image || null} />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default withRouter(AlbumPage);
