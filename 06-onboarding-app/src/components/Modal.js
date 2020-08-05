import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Modal = ({ onCloseModal, info }) => {
  const renderCountries = info.selectedCountries.map((country) => {
    if (country.selected === true) {
      return <span key={country.id}> {country.name} </span>;
    }
  });

  const renderTransportation = info.selectedTransportation.map((transportation) => {
    if (transportation.selected === true) {
      return <span key={transportation.id}> {transportation.name} </span>;
    }
  });

  return ReactDom.createPortal(
    <Container>
      <Dialog>
        <h1>Congrats! You finished! </h1>
        <h2></h2>
        <p>
          <b>City:</b> {info.selectedCity.name}
        </p>
        <p>
          <b>Your favorite transportation means:</b> {renderTransportation}
        </p>
        <p>
          <b>Your next holiday destinations:</b> {renderCountries}
        </p>
        <p>
          <b>Your personal details</b>
        </p>
        <p>
          <b>Name:</b> {info.personalDetails.firstName}
        </p>
        <p>
          <b>Family name: </b>
          {info.personalDetails.familyName}
        </p>
        <p>
          <b>Email:</b> {info.personalDetails.email}
        </p>
        <p>
          <b>Address: </b>
          {info.personalDetails.address}
        </p>
        <p>
          <b>Country:</b> {info.personalDetails.country}
        </p>
        <p>
          <b>Genre:</b> {info.personalDetails.genre}
        </p>
        <div>
          <button className="ui green button" onClick={onCloseModal}>
            Close
          </button>
        </div>
      </Dialog>
    </Container>,
    document.getElementById('modal')
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(97, 97, 97, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dialog = styled.div`
  width: 650px;
  height: 550px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Modal;
