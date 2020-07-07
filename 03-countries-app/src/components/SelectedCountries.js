import React from 'react';
import SelectedCountry from './SelectedCountry';
import PropTypes from 'prop-types';

const SelectedCountries = ({ selectedCountries, removeCountry }) => {
  const renderedSelectedCountries = selectedCountries.map((country) => (
    <SelectedCountry
      selectedCountry={country}
      removeCountry={removeCountry}
      key={country.code}
    />
  ));
  return (
    <div className="selected-countries">
      <p>Here it is your selection: {selectedCountries.length} countries.</p>
      {renderedSelectedCountries}
    </div>
  );
};

SelectedCountries.propTypes = {
  selectedCountries: PropTypes.array.isRequired,
  removeCountry: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
};

export default SelectedCountries;
