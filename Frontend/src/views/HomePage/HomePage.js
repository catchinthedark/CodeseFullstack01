import React, {Suspense, useState} from 'react';
import { Collapse } from 'react-collapse';
import { Typography, Button, Paper, Card, CardContent, CardActions } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

class HomePage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            listProducts: [],
            total: 0,
            page: 1,
            size: 3,
            cardId: null,
            expanded: false
        }
    }

    async componentDidMount() {
        try {
            const res = await axios.get('http://localhost:8080/api/v1/product', {params: {page: this.state.page, size: this.state.size}});
            this.setState({
                listProducts: res.data.data,
                total: res.data.metadata.total
            })
        } catch (err) {
            console.log(err);
        }
    }

    prevPage = async() => {
        const page = this.state.page === 1 ? 1 : this.state.page - 1;
        try {
            const res = await axios.get('http://localhost:8080/api/v1/product', {params: {page: page, size: this.state.size}});
            this.setState({
                ...this.state,
                listProducts: res.data.data,
                page: page
            })
        } catch (err) {
            console.log(err);
        }
    }

    nextPage = async() => {
        const page = this.state.page === Math.ceil(this.state.total/this.state.size) ? Math.ceil(this.state.total/this.state.size) : this.state.page + 1;
        try {
            const res = await axios.get('http://localhost:8080/api/v1/product', {params: {page: page, size: this.state.size}});
            this.setState({
                ...this.state,
                listProducts: res.data.data,
                page: page
            })
        } catch (err) {
            console.log(err);
        }
    }

    handleExpandClick = (productId) => {
        this.setState({
            ...this.state,
            cardId: productId,
            expanded: !this.state.expanded
        })
    };

    productCard = (product) => {
        return (
        <Card variant="outlined" style={{flexDirection: 'column', justifyContent: 'center', width: 330}}>
        <CardContent>
            <Suspense> <img src={product.imageUrl} style={{width:300, height:180}}/> </Suspense> <br></br>
            <Typography style={{color: "#7986cb"}}>{product.display}</Typography> <br></br>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Typography>Price: {product.priceOut}</Typography> 
                <Typography>Sale: {product.priceSale}</Typography>   
            </div> <br></br>
        </CardContent>
        <CardActions disableSpacing>
            <Button onClick={()=>{this.handleExpandClick(product.productId)}} variant="contained" style={{backgroundColor: "#c5cae9"}} endIcon={<ExpandMoreIcon style={{color: "#000000"}}/>}>detail</Button>
        </CardActions>
        <Collapse isOpened={this.state.expanded && this.state.cardId===product.productId} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography style={{color: "#7986cb"}}>{product.description}</Typography>
                <Typography>Provider: {product.provider}</Typography>
                <Typography>Instock: {product.instock}</Typography>
                <Typography>Status: {product.status}</Typography>
            </CardContent>
        </Collapse>
        </Card> );
}

    render() {
        return <div>
            <paper style={{display: 'flex', flexDirection: 'row', flexFlow: 'wrap', justifyContent: 'space-between', margin: 10, height:580}}>
            {
                this.state.listProducts.map((product) => this.productCard(product))
            } </paper>
            <br></br>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button onClick={this.prevPage} variant="contained" style={{backgroundColor: "#c5cae9"}} startIcon={<NavigateBeforeIcon style={{color: "#000000"}}/>}>prev</Button>
                <Button variant="contained" style={{backgroundColor: "#c5cae9", color: "#000000"}} disabled>PAGING: {this.state.page} - {Math.ceil(this.state.total/this.state.size)}</Button>
                <Button onClick={this.nextPage} variant="contained" style={{backgroundColor: "#c5cae9"}} endIcon={<NavigateNextIcon style={{color: "#000000"}}/>}>next</Button>
            </div>
        </div>
    }
}

export default HomePage;
