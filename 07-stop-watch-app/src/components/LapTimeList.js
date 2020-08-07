import React from 'react';
import LapTime from './LapTime';

const LapTimeList = ({ timeList }) => {
  console.log(timeList);
  return (
    <div>
      <div>
        <div>
          <span> Lap </span> <span> Time </span>
        </div>

        <div>
          {timeList.map((time, index) => {
            return (
              <div key={index}>
                <LapTime lap={index + 1} time={time} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LapTimeList;
