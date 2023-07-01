import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal } from 'antd';
import { useModal } from './contexts';

const destroy = () => {
  console.log(1)
  Modal.destroyAll();
}

function App() {
  const { openModal, closeModal } = useModal();

  const handleClick = () => {
    openModal(
      <div>
        Hello
        <Button type="primary" onClick={() => closeModal()}>
          Open Modal of 1000px width
        </Button>
      </div>
    );
  }

  return (
    <div className="App">

      <Button type="primary" onClick={handleClick}>
        Open Modal of 1000px width
      </Button>
    </div>
  );
}

export default App;
