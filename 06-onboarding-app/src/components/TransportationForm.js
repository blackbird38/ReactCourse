import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Transportation from './Transportation';
import './App.css';

const TransportationForm = ({
  header,
  transportation,
  selectTransportation,
  goNext,
}) => {
  const nextClicked = () => {
    goNext();
  };
  const renderTransportationList = () =>
    transportation.map((transp) => (
      <Transportation
        transportation={transp}
        key={transp.id}
        selectTransportation={selectTransportation}
      />
    ));
  return (
    <>
      <div className="ui raised very padded text container segment">
        <h3>{header}</h3>
        <div className="ui three column grid">{renderTransportationList()}</div>
      </div>
      <button className="ui green button" onClick={nextClicked}>
        Next
      </button>
    </>
  );
};

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

TransportationForm.propTypes = {
  // onAddedInput: PropTypes.func.isRequired,
  //onCloseClick: PropTypes.func.isRequired,
};

export default TransportationForm;
