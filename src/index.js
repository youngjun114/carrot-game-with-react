import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import GameProvider from './context/game_context';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
