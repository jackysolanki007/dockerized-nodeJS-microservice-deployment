import React from 'react';
import MicroserviceBox from './components/MicroserviceBox';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <MicroserviceBox microserviceNumber={1} />
      <MicroserviceBox microserviceNumber={2} />
      <MicroserviceBox microserviceNumber={3} />
      <MicroserviceBox microserviceNumber={4} />
      <MicroserviceBox microserviceNumber={5} />
    </div>
  );
}

export default App;

