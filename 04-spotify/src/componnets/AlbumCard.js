import React from 'react';
import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={album.image} />
      </div>
      <div className="content">
        <div className="header">{album.name}</div>
        <div className="meta">
          <a>...</a>
          <Link to={`/album/${album.id}`}>{album.id}</Link>
        </div>
        <div className="description">artists</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          Release year: {album.release_date.substring(0, 4)}
        </span>
        <span className="left floated">
          <i className="heart outline icon"></i>
          Like
        </span>
      </div>
    </div>
  );
};

export default AlbumCard;
