import React from 'react';
import PropTypes from 'prop-types';

const SendButton = ({ sendEmail }) => {
  const onSendClicked = () => {
    sendEmail();
  };
  return (
    <button className="ui teal button send-button" onClick={onSendClicked}>
      Send
    </button>
  );
};

SendButton.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};

export default SendButton;
