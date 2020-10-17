import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import HomePage from './view/Homepage';
import LoginPage from './view/LoginPage';
import Courses from './view/Courses';
import AboutUs from './view/AboutUs';

function App(props) {
    return <BrowserRouter>
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Switch>
          <Route
            component={HomePage}
            exact path="/"
            />
          <Route
            component={LoginPage}
            exact path="/login"
          />
          <Route
            component={Courses}
            exact path="/courses"
          />
          <Route
            component={AboutUs}
            exact path="/aboutus"
          />
        </Switch>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>  
    </Grid>
    </BrowserRouter>
}

export default App;