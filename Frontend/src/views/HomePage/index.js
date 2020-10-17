import React from 'react';
import { Button, Grid, Typography, Toolbar, AppBar, BottomNavigation } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import API from '../../api';
import { withSnackbar } from 'notistack';
import Product from './product';

class HomePage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            listProducts: [],
            total: 0,
            page: 1,
            size: 6,
        }
    }

    async componentDidMount() {
        const res = await API.product.getAllProduct({page: this.state.page, size: this.state.size});
        if (res.status) {
            this.setState({
                listProducts: res.data.data,
                total: res.data.metadata.total
            })
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    prevPage = async() => {
        const page = this.state.page === 1 ? 1 : this.state.page - 1;
        const res = await API.product.getAllProduct({page: page, size: this.state.size});
        if (res.status) {
            this.setState({
                listProducts: res.data.data,
                page: page
            })
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    nextPage = async() => {
        const page = this.state.page === Math.ceil(this.state.total/this.state.size) ? Math.ceil(this.state.total/this.state.size) : this.state.page + 1;
        const res = await API.product.getAllProduct({page: page, size: this.state.size});
        if (res.status) {
            this.setState({
                listProducts: res.data.data,
                page: page
            })
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    render() {
        return <Grid container direction="column" spacing={3} padding={30}>
            <div style={{backgroundImage: 'url(https://images.freeimages.com/images/large-previews/022/pink-sky-1553614.jpg)'}}>
                <Grid item container spacing={4} justify="space-evenly" style={{padding: 50}}>
                {
                    this.state.listProducts.map((product) => 
                    <Grid container item xs={4}>
                        <Product product={product}></Product>
                    </Grid>)
                } </Grid>
            </div>
            <Grid item container direction="row" justify="space-evenly" alignItems="center" style={{margin: 10}}>
                <Button onClick={this.prevPage} variant="contained" style={{backgroundColor: "#7986cb", color: "#ffffff"}} startIcon={<NavigateBeforeIcon style={{color: "#ffffff"}}/>}>prev</Button>    
                <Typography variant="subtitle1" style={{color: "#49599a"}}>PAGING: {this.state.page} - {Math.ceil(this.state.total/this.state.size)}</Typography>    
                <Button onClick={this.nextPage} variant="contained" style={{backgroundColor: "#7986cb", color: "#ffffff"}} endIcon={<NavigateNextIcon style={{color: "#ffffff"}}/>}>next</Button>
           </Grid>
        </Grid>
    }
}

export default withSnackbar(HomePage);
