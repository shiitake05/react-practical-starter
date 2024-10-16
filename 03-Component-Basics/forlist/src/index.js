import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ForList from './ForList';
import books from './books';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForList src={books} />
);

reportWebVitals();
