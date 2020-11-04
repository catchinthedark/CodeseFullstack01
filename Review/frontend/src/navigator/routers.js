import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Home from '../view/home';
import Class from '../view/class';
import Student from '../view/student';

export default class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <Switch>
                <Route 
                    component={Home}
                    exact path="/"
                />
                <Route 
                    component={Class}
                    exact path="/class/:id"
                />
                <Route 
                    component={Student}
                    exact path="/student/:id"
                />
            </Switch>
        </BrowserRouter>
        )
    }
}
