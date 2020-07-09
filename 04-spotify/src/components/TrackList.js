import React from 'react';
import Track from './Track';

const TrackList = ({ tracks }) => {
  const renderedTracks = tracks.map((track, index) => (
    <Track key={track.id} track={track} index={index} />
  ));

  return (
    <div role="list" className="ui divided relaxed list">
      {renderedTracks}
    </div>
  );
};

export default TrackList;
