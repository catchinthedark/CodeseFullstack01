import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import Home from '../view/home';
import Login from '../view/login';
import User from '../view/user';
import NotFound from '../view/not-found';

export default class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/user">
                    <User/>
                </Route>
                <Route exact path="/notfound">
                    <NotFound/>
                </Route>
                <Redirect to="/notfound"/>
            </Switch>
        </BrowserRouter>
        )
    }
}
