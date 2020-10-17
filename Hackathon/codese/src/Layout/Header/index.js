import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, ButtonBase, Typography, Grid } from '@material-ui/core';

export default class header extends Component {
    render() {
        return (
        <AppBar position="static" style={{boxShadow: "none"}}>
          <Toolbar style={{backgroundColor: "#ffffff"}}>
            <Grid container direction="row">
                <Grid container item style={{padding: 10}}>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} justify="flex-start">
                        <ButtonBase component={Link} to="/">
                            <Typography variant="h5" noWrap style={{color: "#000000", fontStyle: "bold"}}>
                                Codese
                            </Typography>   
                        </ButtonBase>
                    </Grid>
                    <Grid item container xs={6} sm={6} md={6} lg={6} xl={6} direction="row" spacing={1} justify="flex-end" style={{paddingRight: 20}}>
                        <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} xl={1.5}>
                            <ButtonBase component={Link} to="/" style={{color: "#000000"}}>
                                <Typography variant="h8" noWrap>
                                    Trang chủ
                                </Typography>   
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} xl={1.5}>
                            <ButtonBase component={Link} to="/courses" style={{color: "#000000"}}>
                                <Typography variant="h8" noWrap>
                                    Các khóa học
                                </Typography>   
                            </ButtonBase>    
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} xl={1.5}>
                            <ButtonBase component={Link} to="/aboutus" style={{color: "#000000"}}>
                                <Typography variant="h8" noWrap>
                                    Về chúng tôi
                                </Typography>   
                            </ButtonBase>       
                        </Grid>
                        <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} xl={1.5}>
                            <ButtonBase component={Link} to="/login" style={{color: "#000000"}}>
                                <Typography variant="h8" noWrap>
                                    Đăng ký
                                </Typography>   
                            </ButtonBase>      
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>  
          </Toolbar>
        </AppBar>
        )
    }
}
