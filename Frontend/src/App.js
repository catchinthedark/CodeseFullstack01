import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import HomePage from './views/HomePage';
import Login from './views/Login';
import NotFound from './views/NotFound';
import CategoryPage from './views/Category';
import Appbar from './views/AppBar';

function App(props) {
    return <BrowserRouter>
    <div style={{display: 'flex', flexDirection: 'column', margin: 10, padding: 10}}>
        <Appbar />
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
