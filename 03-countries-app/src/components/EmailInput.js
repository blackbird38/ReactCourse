import React from 'react';

const EmailInput = ({ onEmailTyped }) => {
  const onEmailTypedChange = (e) => {
    onEmailTyped(e.target.value);
  };
  return (
    <div className="ui input email-input">
      <input
        type="text"
        placeholder="Type the email of your bestie"
        wtx-context="06DE583D-3979-4D4A-81DF-F969063947D6"
        onChange={onEmailTypedChange}
      />
    </div>
  );
};

export default EmailInput;
