import React from 'react';

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

export default SendButton;
