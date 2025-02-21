import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Olá, meu nome é {process.env.REACT_APP_NAME}</h1>
      <p>Atualmente sou {process.env.REACT_APP_JOB_TITLE}</p>
      <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noopener noreferrer">
        Confira meu LinkedIn
      </a>
    </div>
  );
}

export default App;

