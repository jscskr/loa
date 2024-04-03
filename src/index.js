import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
// import App from './App';

import Main from "./views/Main";
import Gnb from "./components/inc/Gnb";
import TabBar from "./components/inc/TabBar";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Gnb />
    <Main />
    <TabBar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
