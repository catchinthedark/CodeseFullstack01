import React, { Component } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

export default class Footer extends Component {
    render() {
        return (
            <Grid container style={{padding: 20, backgroundColor: "#37474f", height: 300}} spacing={2} direction="row">
                <Grid item style={{color: "#ffffff"}} xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Typography variant="h6"> Về chúng tôi </Typography>
                </Grid>
                <Grid item container style={{color: "#ffffff"}} direction="column" xs={2} sm={2} md={2} lg={2} xl={2} spacing={1}>
                    <Grid item>
                        <Typography variant="h6"> Các khóa học </Typography>    
                    </Grid>
                    <Grid item>
                        <Typography variant="h8"> Basic </Typography>      
                    </Grid>
                    <Grid item>
                        <Typography variant="h8"> Pre </Typography>      
                    </Grid>
                    <Grid item>
                        <Typography variant="h8"> Advanced </Typography>        
                    </Grid>
                </Grid>
                <Grid item direction="column" style={{color: "#ffffff"}} xs={4} sm={4} md={4} lg={4} xl={4} spacing={1}>
                    <Typography variant="h6">
                        Địa chỉ
                    </Typography>
                    <Typography variant="h8">
                        Tầng 5, ký túc xá B10, Đại Học Bách Khoa Hà Nội
                    </Typography>
                </Grid>
                <Grid item style={{color: "#ffffff"}} direction="column" xs={4} sm={4} md={4} lg={4} xl={4} spacing={1}>
                    <Grid item>
                        <Typography variant="h6"> Liên hệ </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h8"> Nguyễn Đức Thiên: </Typography>    
                    </Grid>
                    <Grid item>
                        <Typography variant="h8"> ndthien98@gmail.com </Typography>    
                    </Grid>
                    <Grid item>
                        <Typography variant="h8"> Vũ Hoàng Đức Hiếu: </Typography>    
                    </Grid>
                    <Grid item>
                        <Typography variant="h8"> duchieu307@gmail.com </Typography>    
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
