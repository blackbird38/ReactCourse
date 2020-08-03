import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleDown,
  faPlus,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import './App.css';

const Selector = ({ onAddClick, onShowClick, onDeleteClick, selected }) => {
  // const { valueSelected, setValueSelected } = props; // || {};

  const handleShow = () => {
    //setSelected((state) => !state); // with the actual state
    // setSelected(!selected);
    onShowClick();
  };

  const handleAdd = () => {
    onAddClick();
  };

  const handleDelete = () => {
    onDeleteClick();
  };

  return (
    <div>
      <Container>
        <div>
          <FontAwesomeIcon
            icon={faTimesCircle}
            onClick={handleDelete}
            className="Icon"
          />
        </div>
        <div>
          {selected.name ? (
            <p className="Selected">{selected.name}</p>
          ) : (
            <p>Please, select a category:</p>
          )}
        </div>
        <div className="Button-Group">
          <FontAwesomeIcon
            icon={faChevronCircleDown}
            onClick={handleShow}
            className="Icon"
          />
          <FontAwesomeIcon icon={faPlus} onClick={handleAdd} className="Icon" />
        </div>
      </Container>
    </div>
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

Selector.propTypes = {
  selected: PropTypes.object.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onShowClick: PropTypes.func.isRequired,
};

export default Selector;
