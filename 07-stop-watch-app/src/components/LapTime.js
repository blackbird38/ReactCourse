import React from 'react';
import timeFormat from '../utils/timeFormat';

const LapTime = ({ lap, time }) => {
  return (
    <div>
      <span>
        <b>lap {lap} </b>
      </span>
      <span>{timeFormat(time)}</span>
    </div>
  );
};

export default LapTime;
