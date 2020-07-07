import React from 'react';

const Country = ({ country, selectCountry }) => {
  //console.log('Country', country);

  const selectCountryClick = () => {
    selectCountry(country);
  };

  return (
    <a className="ui  massive label" onClick={selectCountryClick}>
      <img className="ui right spaced avatar image" src={country.flag} />
      {country.name}
    </a>
  );
};

export default Country;
