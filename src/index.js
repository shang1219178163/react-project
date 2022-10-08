import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { HashRouter as Router, } from "react-router-dom";
import { routes } from './router/index.js'

// import { renderRoutes,  } from 'react-router-config';

// ReactDOM.render(
// <React.StrictMode>
//   <Router>
//   {renderRoutes(routes)}
//   </Router>
// </React.StrictMode>
// , 
// document.getElementById('root'));

console.log(`routes:${routes}`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* {renderRoutes(routes)} */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
