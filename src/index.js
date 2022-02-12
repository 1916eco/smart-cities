import React from 'react';
import ReactDOM from 'react-dom';
import "./Styles/index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {createStore} from 'redux'


//#region Redux Store
//let store = createStore(reducer)

//Action


//#endregion

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
