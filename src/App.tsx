import React from 'react';
import './App.css';
import { Button } from 'antd';
import { useModal } from './contexts';

function App() {
  const { openModal, closeModal } = useModal();

  const handleClick = () => {
    openModal(
      <div>
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
