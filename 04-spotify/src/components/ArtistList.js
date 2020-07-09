import React from 'react';
import ArtistCard from './ArtistCard';

const ArtistList = ({ artists }) => {
  const renderedArtists = artists.map((artist) => (
    <ArtistCard artist={artist} key={artist.id} />
  ));
  return <div className="ui link cards image-list">{renderedArtists}</div>;
};

export default ArtistList;
