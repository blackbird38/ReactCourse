import React from 'react';
import './App.css';
import Button from './Button';
import InputText from './InputText';

function App({ name }) {
  return (
    <div className="App">
      <div>Hello, {name}!</div>
      <InputText />
      <Button />
    </div>
  );
}

export default App;
