import React, { Component } from 'react';
import { Typography, ButtonBase, Button, Grid } from '@material-ui/core';

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: false,
            atc: false,
            quantity: 0
        }
    }

    handleDetailClick = () => {
        this.setState({
            detail: !this.state.detail
        })
    }

    handleAddToCardClick = () => {
        this.setState({
            atc: !this.state.atc
        })
    }

    handleOrderClick(event) {
        this.setState({
            quantity: event.target.value
        })
    }

    render() {
        return (
        <Grid container spacing={2}>
        <Grid item>
            <ButtonBase style={{width: 200, height: 200}} onClick={this.handleDetailClick}>
                <img style={{margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%'}} alt="complex" src={this.props.product.imageUrl} />
            </ButtonBase>
        </Grid>
        <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography variant="subtitle1" style={{color: "#49599a"}} gutterBottom>
                        {this.props.product.productId}
                    </Typography>
                    <Typography variant="body1" style={{color: "#7986cb"}} gutterBottom>
                        {this.props.product.display}
                    </Typography>
                    <Grid item xs direction="row" spacing={3}>
                        <Typography variant="body1" color="textSecondary">
                            Price: {this.props.product.priceOut}
                        </Typography>    
                        <Typography variant="body1" gutterBottom>
                            Sale: {this.props.product.priceSale}
                        </Typography>
                    </Grid>
                    {this.state.detail ? <Grid item xs direction="column" spacing={2}>
                        <Typography variant="body1" style={{color: "#7986cb"}}>{this.props.product.description}</Typography>
                        <Typography variant="body1">Provider: {this.props.product.provider}</Typography>
                        <Typography variant="body1">Instock: {this.props.product.instock}</Typography>
                        <Typography variant="body1">Status: {this.props.product.status}</Typography>
                    </Grid> : null}
                </Grid>
                <Grid item>
                    <Button onClick={this.handleAddToCardClick} variant="contained" style={{backgroundColor: "#c5cae9"}}>
                        add to cart
                    </Button>
                </Grid>
                <Grid item>
                    {this.state.atc ? <Grid item xs direction="row" spacing={3}>
                    <label>
                        Quantity: 
                        <input type="number" onChange={this.handleOrderClick} />    
                    </label>
                    <Button>order</Button>
                    </Grid> : null}
                </Grid>
            </Grid>
        </Grid>
        </Grid>
        )
    }
}