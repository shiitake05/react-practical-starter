import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StateBasic from './StateBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateBasic init={0} />
);

reportWebVitals();
