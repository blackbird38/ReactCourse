import React from 'react';
import './App.css';
const Location = ({ city, checked, selectCity }) => {
  const onCityClick = (event) => {
    if (event.target.checked === true) {
      selectCity(city);
    }
  };
  return (
    <div className="ui radio checkbox">
      <input
        type="radio"
        name="location"
        checked={checked}
        wtx-context="E33B30DB-D7D6-400A-87B4-50105946CAA1"
        onChange={onCityClick}
      />
      <label>{city.name}</label>
    </div>
  );
};

export default Location;
