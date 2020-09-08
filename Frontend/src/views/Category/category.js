import React, { Component } from 'react';
import { Typography, Grid, ButtonBase } from '@material-ui/core';

export default class Category extends Component {
    render() {
        return <Grid container spacing={2} alignItems="center">
            <Grid item>
                <ButtonBase style={{width: 150, height: 150}}>
                    <img style={{margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%'}} alt="complex" src={this.props.category.imageUrl} />
                </ButtonBase>
            </Grid>
            <Grid item xs direction="column" spacing={2}>
                <Typography style={{color: "#49599a"}} gutterBottom>
                    {this.props.category.categoryId}
                </Typography>
                <Typography style={{color: "#7986cb"}} gutterBottom>
                    {this.props.category.display}
                </Typography>
            </Grid>
        </Grid> 
    }
}