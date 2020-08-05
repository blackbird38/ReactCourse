import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Location = ({ transportation, selectTransportation }) => {
  const [background, setBackground] = useState('white');
  const [transportationSelectedStatus, setTransportationSelectedStatus] = useState(
    true
  );

  const onTransportationClick = () => {
    setTransportationSelectedStatus((state) => !state);
    const bc = transportationSelectedStatus ? 'palegreen' : 'white';
    setBackground(bc);
    transportation.selected = transportationSelectedStatus;
    selectTransportation(transportation);
  };

  return (
    <div className="column">
      <div
        className="ui fluid card"
        onClick={onTransportationClick}
        style={{ backgroundColor: background }}
      >
        <div className="image">
          <img src={'/images/transportation.jpg'} />
        </div>
        <div className="content">
          <a className="header">{transportation.name}</a>
        </div>
      </div>
    </div>
  );
};

export default Location;
