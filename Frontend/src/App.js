import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Grid, Button, Paper } from '@material-ui/core';
import HomePage from './views/HomePage';
import Login from './views/Login';
import NotFound from './views/NotFound';
import CategoryPage from './views/Category';

function App(props) {
    return <BrowserRouter>
    <div style={{display: 'flex', flexDirection: 'row', margin: 10, padding: 10}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <Link to="/">
                    <Button>Home Page</Button>
                </Link>    
                <Link to="/login">
                    <Button>Login Page</Button>
                </Link>    
                <Link to="/category">
                    <Button>Category Page</Button>
                </Link>    
        </div>
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
    </div>
    </BrowserRouter>
}

export default App;
