import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Modal = ({ onCloseModal, onValidateDelete, selected }) => {
  return ReactDom.createPortal(
    <Container>
      <Dialog>
        <h1>Are you sure you want to delete this category? </h1>
        <h2>
          <span style={{ color: 'violet' }}>{selected.name}</span> will be deleted!
        </h2>
        <div>
          <button onClick={onValidateDelete}>Delete</button>
          <button onClick={onCloseModal}>Close</button>
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
  height: 250px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
