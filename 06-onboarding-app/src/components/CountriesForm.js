import React, { useState } from 'react';
import styled from 'styled-components';
import Country from './Country';
import './App.css';

const CountriesForm = ({ header, countries, goNext, selectCountry }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const nextClicked = () => {
    goNext();
  };
  const renderCountryList = () =>
    countries.map((country) => (
      <Country country={country} key={country.id} selectCountry={selectCountry} />
    ));
  return (
    <>
      <div className="ui form">
        <div className="ui grouped fields raised very padded text container segment">
          <h3>
            <label>{header}</label>
          </h3>
          <Container>{renderCountryList()}</Container>
        </div>
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

export default CountriesForm;
