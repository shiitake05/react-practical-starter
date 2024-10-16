import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import books from './books';
import ForSort from './ForSort';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForSort src={books} />
);

reportWebVitals();
