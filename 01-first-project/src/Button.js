import React from 'react';
import './App.css';

const Button = (props) => {
  function onHandleChange(e) {
    props.handleChange('Jon Doe');
  }
  return (
    <button className="button" onClick={onHandleChange}>
      Get anonymous!
    </button>
  );
};

export default Button;
