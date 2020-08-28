import React, { useState } from 'react';
import { TextField, Typography, Button, Paper } from '@material-ui/core';
//const React = require('react');

function HomePage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') handelLogin();
    }
    const handelLogin = () => {
        console.log(username, password);
        if (password.length < 6) alert('Weak password!!!')
    }
    const handelSignUp = () => {
        console.log('This is prop params1: ', props.params1);
        console.log('This is prop params2: ', props.params2);
        props.params2();
        props.setVersion(props.version+1);
    }
    const handelForgotPassword = () => {

    }

    const buttonStyle = {
        color: '#000000',
        backgroundColor: '#ffcdd2',
        width: 200,
        height: 50
    }
    //flex react js - play flexbox froggy
    return <Paper style={{display:'flex', 
                flexDirection:'column', 
                justifyContent: 'flex-start', 
                margin:10,
                padding:10,
                flex:1,
                alignItems:'center',
                backgroundColor:'#e8eaf6'}}>
        <TextField 
            label="username" 
            type="text" 
            onChange={handleChangeUsername} 
            onKeyPress={handleKeyPress}
        ></TextField><br></br>
        <TextField 
            label="password" 
            type="password" 
            onChange={handleChangePassword} 
            onKeyPress={handleKeyPress}
        /><br></br> 
        <Button 
            onClick={handelLogin} 
            variant="contained" 
            style={buttonStyle}>
            <Typography>Login</Typography>
        </Button><br></br>
        <Button 
            onClick={handelSignUp} 
            variant="contained" 
            style={buttonStyle}>
            <Typography>Sign up</Typography>
        </Button><br></br>
        <Button 
            onClick={handelForgotPassword} 
            variant="contained" style={buttonStyle}>
            <Typography>Forgot password?</Typography>
        </Button>
    </Paper>
}

export default HomePage;
