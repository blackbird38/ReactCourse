import './App.css';
import React, { useState } from 'react';

const InputText = (props) => {
  function onInputChange(e) {
    /*  const v = e.target.value;
    console.log(e.target.value);
    setTimeout(() => {
      setValue(v);
    }, 500);
    */
    setValue(e.target.value);
  }
  const [value, setValue] = useState('');

  return <input type="text" value={value} onChange={onInputChange} />;
};

export default InputText;
