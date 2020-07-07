import React from 'react';

const ValidateButton = ({ showEmailInput }) => {
  const showEmailInputClick = () => {
    showEmailInput();
  };
  return (
    <div className="validate-button">
      <button className="ui teal basic button" onClick={showEmailInputClick}>
        Validate
      </button>
    </div>
  );
};

export default ValidateButton;
