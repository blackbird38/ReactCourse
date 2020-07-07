import React from 'react';

const MessageBox = ({ closeMessageAndGoHome, emailAddress }) => {
  const closeMessage = () => {
    closeMessageAndGoHome();
  };
  return (
    <div className="ui info message container segment message-box">
      <i className="close icon" onClick={closeMessage}></i>
      <div clasName="header">Your email was sent to: {emailAddress}</div>
      <div>Countries to display</div>
    </div>
  );
};

export default MessageBox;
