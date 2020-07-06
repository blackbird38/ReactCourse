import './App.css';
import React, { useState } from 'react';

const InputText = (props) => {
  const { handleChange, value } = props;

  function onHandleChange(e) {
    handleChange(e.target.value);
  }

  return <input type="text" onChange={onHandleChange} value={value} />;
};

export default InputText;
