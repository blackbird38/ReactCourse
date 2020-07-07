import React from 'react';

const MessageBox = ({ closeMessageAndGoHome, emailAddress, selectedCountries }) => {
  const renderedCountries = selectedCountries.map((country) => {
    return (
      <a className="ui image label" key={country.name}>
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
      <div className="header">Your email was sent to: {emailAddress}</div>
      <div>Your selection: {renderedCountries}</div>
    </div>
  );
};

export default MessageBox;
