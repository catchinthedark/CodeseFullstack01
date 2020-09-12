import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

export default class AppBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuOpen: false,
            isMobileMenuOpen: false
        }
    } 

    render() {
        return (
            <div style={{flexGrow: 1}}>
              <AppBar position="static">
                <Toolbar style={{backgroundColor: "#49599a"}}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                  >
                    <MenuIcon style={{color: "#ffffff"}}/>
                  </IconButton>
                  <Typography variant="h6" noWrap>
                    MY WEBPAGE
                  </Typography>
                  <div style={{backgroundColor: fade("#49599", 0.15)}}>
                    <div style={{padding: 2, height: '100%', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                      <SearchIcon style={{color: "#ffffff"}}/>
                    </div>
                    <InputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                  <div style={{flexGrow: 1}} />
                  <div>
                    <IconButton aria-label="show new mails" color="inherit">
                      <Badge badgeContent={0} color="secondary">
                        <MailIcon />
                      </Badge>
                    </IconButton>
                    <IconButton aria-label="show new notifications" color="inherit">
                      <Badge badgeContent={0} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </div>
                  <div>
                    <IconButton
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </div>
                </Toolbar>
              </AppBar>
              {renderMobileMenu}
              {renderMenu}
            </div>
          );
    }
}
