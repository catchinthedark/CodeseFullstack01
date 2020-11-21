import React, { Component } from 'react';
import API from '../../api';
import { Grid, Button, Typography, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withSnackbar } from 'notistack';

class AddStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            gender: '',
            age: 10
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAdd = async() => {
        const res = await API.studentAPI.add(this.state);
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
                        name="fullName"
                        label="Full Name"
                        type="text"
                        variant="outlined"
                        onChange={this.handleChange}
                        required
                    />
                </Grid>
                <Grid item>
                    <TextField 
                        name="gender"
                        label="Gender"
                        type="text"
                        variant="outlined"
                        onChange={this.handleChange}
                        required
                    />
                </Grid>
                <Grid item>
                    <TextField 
                        name="age"
                        label="Age"
                        type="number"
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

export default withSnackbar(AddStudent);