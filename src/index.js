import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import Context from './Context/Context'


ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

