import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = ({ emailAddress, selectedCountries, closeMessageAndGoHome }) => {
  const renderedCountries = selectedCountries.map((country) => {
    return (
      <a className="ui image label selected-country" key={country.name}>
        <img src={country.flag} />
        {country.name}
      </a>
    );
  });
  const closeMessage = () => {
    closeMessageAndGoHome();
  };
  return (
    <div className="ui info message container segment message-box">
      <i className="close icon" onClick={closeMessage}></i>
      <div className="header">Your email was sent to: {emailAddress}.</div>
      <div>Your selection: {renderedCountries}</div>
    </div>
  );
};

MessageBox.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  selectedCountries: PropTypes.array.isRequired,
  closeMessageAndGoHome: PropTypes.func.isRequired,
};

export default MessageBox;
