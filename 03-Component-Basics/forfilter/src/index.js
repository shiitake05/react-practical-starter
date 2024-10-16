import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ForFilter from './ForFilter';
import books from './books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ForFilter src={books} />
);

reportWebVitals();
