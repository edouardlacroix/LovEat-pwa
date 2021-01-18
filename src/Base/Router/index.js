import React from "react";
import {
    Router as LocalRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import history from '../Router/History'
import PrivateRoute from './PrivateRoute'
import Login from '../../Pages/Login'
import Register from '../../Pages/Register'
import Welcome from '../../Pages/Welcome'
import MyAccount from '../../Pages/MyAccount'
import ForgotPassword from '../../Pages/ForgotPassword'
import ChangePassword from '../../Pages/ChangePassword'

// PrivateRoute need the token to be accessed
// Route can be accessed by anyone

export default function Router() {
    return (
        <LocalRouter history={history}>
            <Switch>
                {/* Routes that need the user to be connected with a valid token */}
                <PrivateRoute exact path="/"> <Welcome /></PrivateRoute>
                <PrivateRoute exact path="/myaccount"> <MyAccount /></PrivateRoute>

                {/* Routes not needing token */}
                <Route exact path="/login" ><Login /> </Route>
                <Route exact path="/register" ><Register /> </Route>
                <Route exact path="/forgotPassword" ><ForgotPassword /> </Route>
                <Route exact path="/changePassword" ><ChangePassword /> </Route>



                {/* Redirection of everything not existing to welcome and to login if token is not set */}
                <Redirect to="/" />
            </Switch>
        </LocalRouter >
    );
}