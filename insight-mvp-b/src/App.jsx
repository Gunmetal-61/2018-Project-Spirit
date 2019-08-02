import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AuthLayout from "template/layouts/Auth/Auth.jsx";
import AdminLayout from "template/layouts/Admin/Admin.jsx";
import RTLLayout from "template/layouts/RTL/RTL.jsx";

export default class App extends Component {
    render(){
        return (
        <div>
            <Switch>
                <Route path="/auth" render={props => <AuthLayout {...props} />} />
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                <Route path="/rtl" render={props => <RTLLayout {...props} />} />
                <Redirect from="/" to="/admin/dash" />
            </Switch>
        </div>
        );
    }
}
