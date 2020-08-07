import React from 'react';

import timeFormat from '../utils/timeFormat';

const Timer = ({ time }) => {
  return <div className="Timer">{timeFormat(time)}</div>;
};

export default Timer;
