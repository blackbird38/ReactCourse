import React from 'react';

const Country = ({ country, selectCountry }) => {
  //console.log('Country', country);

  const selectCountryClick = () => {
    selectCountry(country);
  };

  return (
    <a className="ui image label country" onClick={selectCountryClick}>
      <img className="flag-image" src={country.flag} />
      {country.name} <span className="color">({country.capital})</span>
    </a>
  );
};

export default Country;
