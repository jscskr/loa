import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
// import App from './App';

import Main from "./views/Main";
import Login from "./components/member/Login";
import Gnb from "./components/inc/Gnb";
import TabBar from "./components/inc/TabBar";
import Floating from "./components/inc/Floating";
import reportWebVitals from "./reportWebVitals";

const App = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <React.StrictMode>
      <Gnb />
      <Main />
      {isVisible && <Login />}
      <Floating />

      <TabBar />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
