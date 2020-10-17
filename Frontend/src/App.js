import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import HomePage from './views/HomePage';
import Login from './views/Login';
import SignUp from './views/SignUp';
import NotFound from './views/NotFound';
import CategoryPage from './views/Category';
import NormalLayout from './layout/Normal';
import UserLayout from './layout/User';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routers: [
                {
                    component: HomePage,
                    layout: Cookies.get('token') ? UserLayout : NormalLayout,
                    path: '/',
                },
                {
                    component: Login,
                    layout: NormalLayout,
                    path: '/login',
                },
                {
                    component: CategoryPage,
                    layout: Cookies.get('token') ? UserLayout : NormalLayout,
                    path: '/category',
                },
                {
                    component: SignUp,
                    layout: NormalLayout,
                    path: '/sign-up',
                }
            ]
        }
    }
    render () {
        return <BrowserRouter>
            <Switch>
                {
                    this.state.routers.map(e => (
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <e.layout />
                            </Grid>
                            <Grid item>
                                <Route
                                    component={e.component}
                                    exact path={e.path}
                                />
                            </Grid>    
                        </Grid>
                    ))
                }
                <Route
                    component={NotFound}
                    path='/not-found'
                />
                <Redirect from='/' to='/not-found'></Redirect>
            </Switch>
        </BrowserRouter>
    }
}
export default App;
