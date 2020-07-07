import React from 'react';
import PropTypes from 'prop-types';

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

ValidateButton.propTypes = {
  showEmailInput: PropTypes.func.isRequired,
};

export default ValidateButton;
