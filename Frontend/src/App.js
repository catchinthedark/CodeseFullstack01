import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Grid, Button, Paper } from '@material-ui/core';
import HomePage from './views/HomePage';
import Login from './views/Login';
import NotFound from './views/NotFound';
import CategoryPage from './views/Category';

function App(props) {
    return <BrowserRouter>
    <div style={{margin: 10, padding: 10}}>
        <Grid container justify="flex-start" alignItems="flex-start">
            <Grid item container direction="row" justify="space-evenly" alignItems="center">
                <Link to="/">
                    <Button>Home Page</Button>
                </Link>    
                <Link to="/login">
                    <Button>Login Page</Button>
                </Link>    
                <Link to="/category">
                    <Button>Category Page</Button>
                </Link>    
            </Grid>
            <Switch>
                <Route
                    component={HomePage}
                    exact path="/"
                />
                <Route
                    component={Login}
                    exact path="/login"
                />
                <Route
                    component={CategoryPage}
                    exact path="/category"
                />
                <Route
                    component={NotFound}
                    path="/"
                />
            </Switch>
        </Grid>
    </div>
    </BrowserRouter>
}

export default App;
