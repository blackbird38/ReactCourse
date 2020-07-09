import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
  const renderedGenres = artist.genres.map((genre) => (
    <div class="ui pink horizontal label genre">{genre}</div>
  ));
  return (
    <div className="card">
      <div className="image">
        <Link to={`/artist/${artist.id}`}>
          <img src={artist.image} className="artist-card-image" />
        </Link>
      </div>

      <div className="content">
        <Link to={`/artist/${artist.id}`}>
          <div className="header card-header text-pink-500">{artist.name}</div>
        </Link>
        <div className="meta"></div>
        <div className="description">{renderedGenres}</div>
      </div>
      <div className="extra content">
        <span className="right floated">Followers: {artist.followers}</span>
        <span className="left floated">Popularity: {artist.popularity}</span>
      </div>
    </div>
  );
};

export default ArtistCard;
