import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import books from './books';
import ForNest from './ForNest';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 「forlist」をこのように変更することで、ビューの再利用性を高めることが可能となる
root.render(
  <ForNest src={books} />
);

reportWebVitals();
