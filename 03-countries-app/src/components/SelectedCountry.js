import React from 'react';

const SelectedCountry = ({ selectedCountry, removeCountry }) => {
  //console.log('SelectedCountry', selectedCountry);

  const removeCountryClick = () => {
    removeCountry(selectedCountry);
  };
  return (
    <div className="ui image label selected-country">
      <img src={selectedCountry.flag} />
      {selectedCountry.name}
      <i className="delete icon" onClick={removeCountryClick}></i>
    </div>
  );
};

export default SelectedCountry;
