import React from 'react';
import Track from './Track';

const TrackList = ({ tracks }) => {
  const renderedTracks = tracks.map((track, index) => (
    <Track key={index} track={track} index={index} />
  ));

  return (
    <div role="list" className="ui divided relaxed list">
      {renderedTracks}
    </div>
  );
};

export default TrackList;
