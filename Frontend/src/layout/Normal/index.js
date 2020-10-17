import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, AppBar, Button, Toolbar, Divider, IconButton, ButtonBase, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default class NormalLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawerOpen: false,
            isProfileOpen: false,
            drawerWidth: 240
        }
    } 
    handleProfileMenu = () => {
      this.setState({
        isProfileOpen: !this.state.isProfileOpen
      })
    };
  
    handleDrawer = () => {
      this.setState({
        isDrawerOpen: !this.state.isDrawerOpen
      })
    };

    render() {
      return (
      <Grid container item>
        <AppBar position="static" style={{boxShadow: "none"}}>
          <Toolbar style={{backgroundColor: "#9fa8da"}}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawer}
            >
            <MenuIcon style={{color: "#ffa4a2"}}/>
              </IconButton>
                <Typography variant="h6" noWrap style={{flexGrow: 1, color: "#ffffff"}} component={Link} to="/">
                  MY LITTLE PLACE 
                </Typography>       
                <Link to="/login">
                  <IconButton> <AccountCircle style={{color: "#ffa4a2"}} /> </IconButton>
                </Link>
          </Toolbar>
        </AppBar>
        <Drawer
          style={{width: this.state.drawerWidth, flexShrink: 0}}
          variant="persistent"
          anchor="left"
          open={this.state.isDrawerOpen}
          classes={{
            paper: {width: this.state.drawerWidth},
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', padding: 5, justifyContent: 'flex-start'}}>
            <IconButton onClick={this.handleDrawer}>
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon> <HomeIcon style={{color: "#ffa4a2"}} /> </ListItemIcon>
              <ListItemText primary={'HOME'} />
            </ListItem>
            <ListItem button component={Link} to="/category">
              <ListItemIcon> <DashboardIcon style={{color: "#ffa4a2"}} /> </ListItemIcon>
              <ListItemText primary={'CATEGORY'} />
            </ListItem>
          </List>
        </Drawer>
      </Grid>
      )
  }
}
