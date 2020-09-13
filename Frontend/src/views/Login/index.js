import React, { Component } from 'react';
import { Avatar, Button, Divider, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default class login extends Component {
    render() {
        return (
        <Grid container component="main" style={{height: '100vh'}}>
            <Grid item xs={false} sm={4} md={7} 
                style={{
                    backgroundImage: 'url(https://p2.music.126.net/7Xy_5iudvTbu8NCxf67l4w==/109951163264752545.jpg)',
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
                        <LockOutlinedIcon />
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
                            id="account"
                            label="Account"
                            name="account"
                            autoComplete="account"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        < FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{
                                marginTop: 60,
                                backgroundColor: "#ffa4a2",
                                color: "#ffffff"
                            }}
                        >
                            LOGIN
                        </Button> <br></br>
                        <Grid container justify="center" alignItems="center">
                            <Link href="#" variant="body2" style={{color: "#7986cb"}}>
                                Forgot password?
                            </Link>    
                        </Grid>
                        <Box mt={5}>
                            <Divider variant="middle" /> 
                            <Grid container justify="center" alignItems="center">
                                <Link href="#" variant="body1" style={{color: "#7986cb"}}>
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