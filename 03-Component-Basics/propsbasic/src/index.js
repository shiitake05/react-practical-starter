import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyHello from './MyHello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyHello myName="鈴木" />
  // <MyHello />
);

reportWebVitals();
