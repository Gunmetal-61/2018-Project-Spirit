import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "template/layouts/Auth/Auth.jsx";
import AdminLayout from "template/layouts/Admin/Admin.jsx";
import RTLLayout from "template/layouts/RTL/RTL.jsx";

import "template/assets/css/nucleo-icons.css";
import "template/assets/scss/black-dashboard-pro-react.scss?v=1.0.0";
import "template/assets/demo/demo.css";
import "react-notification-alert/dist/animate.css";

// import 'bootstrap/dist/css/bootstrap.min.css';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/rtl" render={props => <RTLLayout {...props} />} />
      <Redirect from="/" to="/admin/dash" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
