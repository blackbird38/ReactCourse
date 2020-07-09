import React from 'react';
import AlbumCard from './AlbumCard';

const AlbumList = ({ albums }) => {
  //console.log('albums', albums);
  const renderedAlbums = albums.map((album) => (
    <AlbumCard album={album} key={album.id} />
  ));
  return <div className="ui link cards image-list">{renderedAlbums}</div>;
};

export default AlbumList;
