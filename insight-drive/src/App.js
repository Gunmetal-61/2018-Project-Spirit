import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';

import AuthLayout from "template/layouts/Auth/Auth.jsx";
import AdminLayout from "template/layouts/Admin/Admin.jsx";
import RTLLayout from "template/layouts/RTL/RTL.jsx";

import "template/assets/css/nucleo-icons.css";
import "template/assets/css/black-dashboard-pro-react.css";
import "template/assets/demo/demo.css";
import "react-notification-alert/dist/animate.css";

const App = () => (
  <Switch>
    <Route path="/auth" render={props => <AuthLayout {...props} />} />
    <Route path="/admin" render={props => <AdminLayout {...props} />} />
    <Route path="/rtl" render={props => <RTLLayout {...props} />} />
    <Redirect from="/" to="/admin/dash" />
  </Switch>
);

export default App;
