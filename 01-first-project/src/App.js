import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import InputText from './InputText';

function App({ name }) {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <div>Hello, {value}!</div>
      <InputText handleChange={setValue} value={value} />
      <Button handleChange={setValue} />
    </div>
  );
}

export default App;
