import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <div style={{display: 'flex', flexGrow: 1, marginBottom: 20}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{flexGrow: 1}}>
                            CLASSES and STUDENTS
                        </Typography>
                        <Link to="/">
                            <IconButton>
                                <HomeIcon style={{color: "#ffffff"}}/>
                            </IconButton>
                        </Link>
                        <Link to="/student">
                            <IconButton>
                                <PeopleIcon style={{color: "#ffffff"}}/>
                            </IconButton>
                        </Link>
                        <Link to="/add-class">
                            <IconButton>
                                <PostAddIcon style={{color: "#ffffff"}}/>
                            </IconButton>
                        </Link>
                        <Link to="/add-student">
                            <IconButton>
                                <PersonAddIcon style={{color: "#ffffff"}}/>
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
