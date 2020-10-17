import React from 'react';
import { Grid, TextField, Button, Typography, Paper } from '@material-ui/core';
import UserPage from './view/user';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      login: false,
      loginFail: false,
    }
  }

  handleUsernameInput = async(event) => {
    await this.setState({
      ...this.state,
      username: event.target.value
    })
  }

  handlePasswordInput = async(event) => {
    await this.setState({
      ...this.state,
      password: event.target.value
    })
  }

  handleLoginClick = async() => {
    const data = await this.callAuthApi(this.state.username, this.state.password);
    console.log(data);
    if (data) {
      await this.setState({
        ...this.state,
        login: true,
        loginFail: false
      })
    } else {
      await this.setState({
        username: '',
        password: '',
        login: false,
        loginFail: true
      })
    }
  }

  callAuthApi(username, password) {
    const body = {
      username: username,
      password: password
    }
    const url = 'https://8e6484f74e30.ngrok.io/login';
    const config = {
      method: 'POST',
      url: url,
      data: body
    }
    axios(config)
      .then((res) => {
        return true;
      })
      .catch((err) => {
        return false;
      })
  }
  render() {
    if (this.state.login) {
      return (
        <UserPage username={this.state.username}/>
      )
    } else {
      return (
        <Grid container 
        component="main" 
        style={{
          height: '90vh',
        }}>
        <Grid item xs={false} sm={4} md={7} 
        style={{
          backgroundImage: 'url(https://images.freeimages.com/images/large-previews/031/sky-with-red-clouds-3-1635514.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div style={{
            padding: 40,
            height: '90vh',
            backgroundColor: "#fce4ec",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundImage: 'url(https://images.freeimages.com/images/large-previews/031/sky-with-red-clouds-3-1635514.jpg)',
              padding: 10,
              marginTop: 30,
              marginBottom: 50
            }}>
              <Typography component="h1" variant="h5" style={{color: "#ffffff"}}>
                login page
              </Typography>
            </div>
            <form 
              style={{
                width: '100%', 
                marginTop: 80, 
                padding: 10,
              }} 
              noValidate
            >
              <Grid container spacing={5} direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                  <TextField 
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.handleUsernameInput}
                    variant="outlined"
                    style={{
                      backgroundColor: "#ffffff"
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.handlePasswordInput}
                    variant="outlined"
                    style={{
                      backgroundColor: "#ffffff"
                    }}
                    fullWidth
                  /> 
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={this.handleLoginClick}
                    variant="outlined"
                    style={{
                      backgroundColor: "#ffffff"
                    }}
                  >
                    LOGIN
                  </Button>
                  {this.state.loginFail ? <Typography style={{color: "#d50000"}}>
                    Incorrect username or password
                  </Typography> : null}
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
      )
    }
  }
}

export default App;

