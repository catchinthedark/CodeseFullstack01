import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import API from '../../api';
import { Avatar, Button, Divider, TextField, InputAdornment, FormControlLabel, Checkbox, Paper, Box, Grid, Typography } from '@material-ui/core';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import { withSnackbar } from 'notistack';
import { createBrowserHistory } from 'history';

class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.history = createBrowserHistory();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = async() => {
        try {
            const result = await API.auth.login({username: this.state.username, password: this.state.password});
            Cookie.set('token', result.data.token, {
                expires: 365
            });
            this.history.push('/');
        } catch (err) {
            this.props.enqueueSnackbar('Login failed!');
        }
    }

    render() {
        return (
        <Grid container component="main" style={{height: '100vh'}}>
            <Grid item xs={false} sm={4} md={7} 
                style={{
                    backgroundImage: 'url(https://i.pinimg.com/originals/b7/32/cc/b732ccb7ba935f7a0a4d62ae5861f39a.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} 
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                <div style={{
                    padding: 40,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar style={{
                        margin: 1,
                        backgroundColor: "#ffa4a2"
                    }}>
                        <LocalFloristIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        welcome to my little place
                    </Typography>
                    <form style={{width: '100%', marginTop: 30}} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBoxIcon style={{color: "#9fa8da"}} />
                                    </InputAdornment>
                                )
                            }}
                            autoFocus
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={{color: "#9fa8da"}} />
                                    </InputAdornment>
                                )
                            }}
                            onChange={this.handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={this.handleLogin}
                            style={{
                                marginTop: 60,
                                backgroundColor: "#ffa4a2",
                                color: "#ffffff"
                            }}
                        >
                            LOGIN
                        </Button> 
                        <Grid container justify="center" alignItems="center" style={{paddingTop: 15}}>
                            <Link href="#" variant="body1" style={{color: "#7986cb"}}>
                                Forgot password?
                            </Link>    
                        </Grid>
                        <Box mt={5}>
                            <Divider variant="middle" /> 
                            <Grid container justify="center" alignItems="center" style={{paddingTop: 15}}>
                                <Link to="/signup" variant="body1" style={{color: "#7986cb", cursor: "pointer"}}>
                                        Don't have an account? Sign Up  
                                </Link>    
                            </Grid>
                        </Box>
                        <Box mt={10}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © '}
                            <Link color="inherit" href="https://material-ui.com/">
                                Your Website
                            </Link>{' '}
                            {new Date().getFullYear()}
                            { '.' }
                        </Typography>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
        )
    }
}

export default withSnackbar(login);