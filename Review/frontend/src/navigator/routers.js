import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import { Grid } from '@material-ui/core';
import Home from '../view/home';
import Class from '../view/class';
import AddClass from '../view/add-class';
import Student from '../view/student';
import AllStudent from '../view/all-student';
import AddStudent from '../view/add-student';
import Header from './header';

export default class Router extends Component {
    render() {
        return (
        <BrowserRouter>
        <Grid container direction="column">
            <Grid item>
                <Header/>
            </Grid>
            <Grid item>
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
                    component={AddClass}
                    exact path="/add-class"
                />
                <Route 
                    component={Student}
                    exact path="/student/:id"
                />
                <Route
                    component={AllStudent}
                    path="/student"
                />
                <Route 
                    component={AddStudent}
                    exact path="/add-student"
                />
            </Switch>
            </Grid>
        </Grid>
        </BrowserRouter>
        )
    }
}
