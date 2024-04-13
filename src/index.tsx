import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/index.tsx';
import reportWebVitals from './reportWebVitals.ts';
import './sass/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
