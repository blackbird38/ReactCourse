import React from 'react';
import SelectedCountry from './SelectedCountry';

const SelectedCountries = ({ selectedCountries, removeCountry }) => {
  const renderedSelectedCountries = selectedCountries.map((country) => (
    <SelectedCountry
      selectedCountry={country}
      removeCountry={removeCountry}
      key={country.name}
    />
  ));
  return (
    <div className="selected-countries">
      <p>Here it is your selection: {selectedCountries.length} countries.</p>
      {renderedSelectedCountries}
    </div>
  );
};

export default SelectedCountries;
