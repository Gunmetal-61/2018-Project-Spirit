import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';

// import "template/assets/css/nucleo-icons.css";
// import "./template/assets/scss/black-dashboard-pro-react.scss?v=1.0.0";
// import "template/assets/demo/demo.css";
// import "react-notification-alert/dist/animate.css";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
