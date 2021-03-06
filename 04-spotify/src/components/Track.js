import React from 'react';
import convertMS from '../util/convertMS';

const Track = ({ track, index, playTrack }) => {
  return (
    <div
      role="listitem"
      className="item track-list"
      onClick={() => {
        playTrack(track);
      }}
    >
      <div className="track-number">{index + 1}</div>
      <div className="content">
        <a className="header track-name">{track.name}</a>
        <a className="description">{convertMS(track.duration_ms)}</a>
      </div>
    </div>
  );
};
export default Track;
