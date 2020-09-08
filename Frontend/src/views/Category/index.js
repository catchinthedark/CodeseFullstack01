import React from 'react';
import { Typography, Button, Paper, Card, CardContent, CardActions, Grid } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import API from '../../api';
import { withSnackbar } from 'notistack';
import Category from './category';

class CategoryPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            listCategories: [],
            page: 1,
            size: 5,
            total: 0
        }
    }

    async componentDidMount() {
        const res = await API.category.getAllCategory({page: this.state.page, size: this.state.size});
        if (res.status) {
            this.setState({
                listCategories: res.data.data,
                total: res.data.metadata.total
            })
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    prevPage = async() => {
        const page = this.state.page === 1 ? 1 : this.state.page - 1;
        const res = await API.category.getAllCategory({page: page, size: this.state.size});
        if (res.status) {
            this.setState({
                listCategories: res.data.data,
                page: page
            })
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    nextPage = async() => {
        const page = this.state.page === Math.ceil(this.state.total/this.state.size) ? Math.ceil(this.state.total/this.state.size) : this.state.page + 1;
        const res = await API.category.getAllCategory({page: page, size: this.state.size});
        if (res.status) {
            this.setState({
                listCategories: res.data.data,
                page: page
            })
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    render() {
        return <Grid container direction="column" spacing={3}>
            <Grid item container spacing={1}>
            {
                this.state.listCategories.map((category) => 
                <Grid container item xs={6}>
                    <Category category={category}></Category>
                </Grid>)
            } </Grid>
            <Grid item container direction="row" justify="space-evenly" alignItems="center">
                <Button onClick={this.prevPage} variant="contained" style={{backgroundColor: "#c5cae9"}} startIcon={<NavigateBeforeIcon style={{color: "#000000"}}/>}>prev</Button>    
                <Typography variant="subtitle1" style={{color: "#49599a"}}>PAGING: {this.state.page} - {Math.ceil(this.state.total/this.state.size)}</Typography>    
                <Button onClick={this.nextPage} variant="contained" style={{backgroundColor: "#c5cae9"}} endIcon={<NavigateNextIcon style={{color: "#000000"}}/>}>next</Button>
            </Grid>
        </Grid>
    }
}

export default withSnackbar(CategoryPage);
