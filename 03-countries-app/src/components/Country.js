import React from 'react';
import PropTypes from 'prop-types';

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

Country.propTypes = {
  country: PropTypes.object.isRequired,
  selectCountry: PropTypes.func.isRequired,
};

export default Country;
