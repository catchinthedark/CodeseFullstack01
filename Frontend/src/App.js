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
import Params from './views/Params';
import Product from './views/HomePage/product';

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
                },
            ]
        }
    }
    render() {
        return <BrowserRouter>
            <Switch>
                {
                    this.state.routers.map(e => (
                        <Route exact path={e.path} >
                            <e.layout>
                                <e.component></e.component>
                            </e.layout>
                        </Route>
                    ))
                }
                <Route
                    component={Params}
                    path='/:param'
                />
                
                
                <Redirect from='/' to='/:param'></Redirect>
            </Switch>
        </BrowserRouter>
    }
}
export default App;



const style = {
    height: '57%',
    width: '47%',

}


// localhost:/product
// localhost:/product/:id
