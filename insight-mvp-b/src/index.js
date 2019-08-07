import React from "react";
import ReactDOM from "react-dom";
import { createHistory } from "history";
import { BrowserRouter} from "react-router-dom";

import "template/assets/css/nucleo-icons.css";
import "template/assets/scss/black-dashboard-pro-react.scss?v=1.0.0";
import "template/assets/demo/demo.css";
import "react-notification-alert/dist/animate.css";

import App from './App';

// import 'bootstrap/dist/css/bootstrap.min.css';

const hist = createHistory();
console.log(102);
ReactDOM.render(
  <BrowserRouter history={hist}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
console.log(103);
