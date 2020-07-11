import React from 'react';
import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => {
  const renderedArtists = album.artists.map((artist) => (
    <div key={artist.id}>{artist.name}</div>
  ));
  return (
    <div className="card">
      <div className="image">
        <Link to={`/album/${album.id}`}>
          <img src={album.image} />
        </Link>
      </div>

      <div className="content">
        <Link to={`/album/${album.id}`}>
          <div className="header card-header">{album.name}</div>
        </Link>
        <div className="meta"></div>
        <div className="description">{renderedArtists}</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          Release year: {album.release_date.substring(0, 4)}
        </span>
        <span className="left floated">{album.total_tracks} tracks</span>
      </div>
    </div>
  );
};

export default AlbumCard;
