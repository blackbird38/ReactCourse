import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const Input = ({ onAddedInput, onCloseClick }) => {
  const [addedInput, setAddedInput] = useState('');

  const onInputChange = (event) => {
    setAddedInput(event.target.value);
  };

  const onValidateInput = () => {
    onAddedInput(addedInput);
  };

  const onCloseInput = () => {
    onCloseClick();
  };

  return (
    <Container>
      <input type="text" onChange={onInputChange} />
      <div className="Button-Group">
        <FontAwesomeIcon
          onClick={onValidateInput}
          icon={faCheck}
          className="Icon"
          style={{ color: 'green' }}
        />
        <FontAwesomeIcon
          onClick={onCloseInput}
          icon={faTimesCircle}
          className="Icon"
          style={{ color: 'red' }}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-left: 1em;
  width: 450px;
  height: 3em;
  border: solid 0.05em black;
  display: flex;
  justify-content: space-between;
  align-items: center !important;
`;

Input.propTypes = {
  onAddedInput: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default Input;
