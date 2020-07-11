import React from 'react';
import AlbumCard from './AlbumCard';

const AlbumList = ({ albums }) => {
  const renderedAlbums = albums.map((album) => (
    <AlbumCard album={album} key={album.id} />
  ));
  return <div className="ui link cards album-list">{renderedAlbums}</div>;
};

export default AlbumList;
