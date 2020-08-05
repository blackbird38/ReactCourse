import React, { useState } from 'react';
import './App.css';
const Country = ({ country, checked, selectCountry }) => {
  const [countrySelectedStatus, setCountrySelectedStatus] = useState(true);

  const onSelectCountry = () => {
    setCountrySelectedStatus((state) => !state);
    country.selected = countrySelectedStatus;
    selectCountry(country);
  };
  return (
    <div className="ui checked checkbox">
      <input
        type="checkbox"
        wtx-context="3448102A-639A-472A-AE88-8A04DD58A118"
        onClick={onSelectCountry}
      />
      <label>{country.name}</label>
    </div>
  );
};

export default Country;
