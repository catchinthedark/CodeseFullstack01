import React, { Component } from 'react';
import API from '../../api';
import { Grid, Button, Typography, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withSnackbar } from 'notistack';

class AddClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            className: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAdd = async() => {
        const res = await API.classAPI.add(this.state);
        if (res.status === true) {
            this.props.history.push('/');
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    render() {
        return (
            <Grid container direction="column" spacing={2} style={{marginLeft: 20}}>
                <Grid item>
                    <TextField 
                        name="className"
                        label="Class Name"
                        type="text"
                        variant="outlined"
                        onChange={this.handleChange}
                        required
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={this.handleAdd}
                    >
                        ADD
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default withSnackbar(AddClass);