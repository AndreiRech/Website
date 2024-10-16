import React from 'react';
import ReactDOM from 'react-dom';
import Rout from './router/index.tsx'
import reportWebVitals from './reportWebVitals.ts';
import './sass/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
