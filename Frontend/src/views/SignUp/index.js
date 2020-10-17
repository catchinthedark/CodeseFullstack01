import React, { Component } from 'react';
import { Typography, TextField, Button, Grid, InputAdornment } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CakeIcon from '@material-ui/icons/Cake';
import ImageIcon from '@material-ui/icons/Image';


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '', 
            email: '',
            phone: '', 
            birthday: '', 
            avatar: '',
            comfirmPassword: '',
            forbiddenWords: ["password", "user", "account", "username"]
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignUp = () => {

    }

    existUsername = () => {
        
    }

    isConfirmPassword = () => {

    }

    validateEmail = () => {

    }

    render() {
        return (
            <div style={{
                backgroundImage: 'url(https://i.pinimg.com/originals/b7/32/cc/b732ccb7ba935f7a0a4d62ae5861f39a.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} >
                <div style={{
                    marginLeft: 300,
                    marginRight: 300,
                    marginTop: 100,
                    marginBottom: 100,
                    padding: 30,
                    backgroundColor: "#fce4ec",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        backgroundImage: 'url(https://i.pinimg.com/originals/b7/32/cc/b732ccb7ba935f7a0a4d62ae5861f39a.png)',
                        padding: 10
                    }}>
                        <Typography component="h1" variant="h5" style={{color: "#ffffff"}}>
                            welcome to my little place
                        </Typography>
                    </div>
                    <form style={{width: '100%', marginTop: 10, padding: 10}} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBoxIcon style={{color: "#9fa8da"}} />
                                    </InputAdornment>
                                    )
                                }}
                                onChange={this.handleChange}
                                validate={this.existUsername}
                                emptyMessage="Username can't be empty"
                                errorMessage="Username existed!"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                validator="true"
                                minCharacters="6"
                                forbiddenWords={this.state.forbiddenWords}
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
                                emptyMessage="Password is invalid"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                validate={this.isConfirmPassword}
                                minCharacters="6"
                                forbiddenWords={this.state.forbiddenWords}
                                id="confirmPassword"
                                label="Confirm Password"
                                name="confirmPassword"
                                type="confirmPassword"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={{color: "#9fa8da"}} />
                                    </InputAdornment>
                                    )
                                }}
                                onChange={this.handleChange}
                                emptyMessage="Please confirm your password"
                                errorMessage="Password don't match"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon style={{color: "#9fa8da"}} />
                                    </InputAdornment>
                                    )
                                }}
                                validate={this.validateEmail}
                                onChange={this.handleChange}
                                emptyMessage="Email can't be empty"
                                errorMessage="Email is invalid"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="phone"
                                label="Phone"
                                name="phone"
                                type="text"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIphoneIcon style={{color: "#9fa8da"}} />
                                    </InputAdornment>
                                    )
                                }}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                                margin="normal"
                                fullWidth
                                id="birthday"
                                label="Birthday"
                                name="birthday"
                                type="date"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CakeIcon style={{color: "#9fa8da"}} />
                                    </InputAdornment>
                                    )
                                }}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="avatar"
                                label="Avatar"
                                name="avatar"
                                type="url"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <ImageIcon style={{color: "#9fa8da"}} />
                                    </InputAdornment>
                                    )
                                }}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={this.handleSignUp}
                                style={{
                                    marginTop: 10,
                                    backgroundColor: "#ffa4a2",
                                    color: "#ffffff"
                                }}
                            >
                                sign up
                            </Button>
                        </Grid>
                    </Grid>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;
