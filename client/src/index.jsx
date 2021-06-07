import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlemApp from './PlemApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PlemApp />
  </React.StrictMode>,
  document.getElementById('plemapp')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
