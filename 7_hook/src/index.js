import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseStateUseEffect from './UseStateUseEffect.jsx';
import UseCallback from './UseCallback';
import UseRef from './UseRef';
import CallbackRef from './CallbackRef';
import Accommodate from './chapter7/Accommodate';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseStateUseEffect /> */}
    {/* <UseCallback /> */}
    {/* <UseRef /> */}
    {/* <CallbackRef /> */}
    <Accommodate />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
