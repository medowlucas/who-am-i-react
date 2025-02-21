import React from 'react';
import './App.css'; // Arquivo CSS para personalizar o layout
import LinkedInPosts from './components/LinkedinPosts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo à minha Página Pessoal</h1>
        <p>Saiba mais sobre mim abaixo!</p>
      </header>

      <section className="about-me">
        <h2>Sobre Mim</h2>
        <p>{process.env.REACT_APP_NAME} - {process.env.REACT_APP_JOB_TITLE}</p>
        <p>Sou um desenvolvedor de software apaixonado por construir aplicações web impactantes.</p>
      </section>

      <LinkedInPosts />

      <footer>
        <p>Me encontre no <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>
      </footer>
    </div>
  );
}

export default App;
