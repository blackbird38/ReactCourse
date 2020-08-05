import React from 'react';
import styled from 'styled-components';
import Location from './Location';
import './App.css';

const LocationForm = ({ header, cities, goNext, selectCity }) => {
  const nextClicked = () => {
    goNext();
  };
  const renderCityList = () =>
    cities.map((city) => (
      <Location city={city} key={city.id} selectCity={selectCity} />
    ));
  return (
    <>
      <div className="ui form raised very padded text container segment">
        <div className="grouped fields">
          <h3>
            <label>{header}</label>
          </h3>
        </div>
        <Container>{renderCityList()}</Container>
      </div>
      <button className="ui green button" onClick={nextClicked}>
        Next
      </button>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export default LocationForm;
