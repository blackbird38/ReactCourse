import React from 'react';
import Country from './Country';

const CountryList = ({ countries, selectCountry, total }) => {
  //console.log('CountryList: countries', countries);

  const renderedCountries = countries.map((country) => (
    <Country country={country} key={country.name} selectCountry={selectCountry} />
  ));
  //console.log('CountryList: renderedCountries', renderedCountries);

  return (
    <div className="ui raised very padded text container segment">
      <h2 className="ui header">Country List</h2>
      <p>
        Here is a selection of <span className="color">{total}</span> countries.
        Select some as your next holiday destination and let your best friend know
        about it!
      </p>
      <div className="ui four column relaxed grid">{renderedCountries}</div>
    </div>
  );
};

export default CountryList;
