import React, { Component } from 'react';
import API from '../../api';
import { withSnackbar } from 'notistack';
import { Typography, Grid} from '@material-ui/core';

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: {

            }
        }
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params.id);
        const res = await API.studentAPI.getById(params.id);
        if (res.status) {
            this.setState({
                student: res.data
            })
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    render() {
        return (
            <Grid container spacing={5} direction="column">
            <Grid item>
                <Typography> 
                    {this.state.student.fullName} 
                </Typography>
            </Grid>
            <Grid item>
                <Typography> 
                    {this.state.student.gender} 
                </Typography>
            </Grid>
            <Grid item>
                <Typography> 
                    {this.state.student.age} 
                </Typography>
            </Grid>
            </Grid>
        )
    }
}

export default withSnackbar(Student);