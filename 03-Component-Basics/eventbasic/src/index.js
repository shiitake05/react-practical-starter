import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import EventBasic from './EventBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 3-1-3 イベント処理の基本
// 
root.render(
  <>
  <EventBasic type="time" />
  <EventBasic type="date" />
  <EventBasic />
  </>
);

reportWebVitals();
