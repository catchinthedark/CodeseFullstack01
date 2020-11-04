import React, { Component } from 'react';
import API from '../../api';
import { withSnackbar } from 'notistack';
import { Typography, Grid, ButtonBase } from '@material-ui/core';

class Class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listStudents: []
        }
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        const res = await API.classAPI.getById(params.id);
        if (res.status) {
            this.setState({
                listStudents: res.data
            })
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    render() {
        return (
            <Grid container spacing={5} direction="column">
                {this.state.listStudents.map((st) => 
                    <Grid item>
                        <ButtonBase
                            onClick={() => {
                                this.props.history.push(`/student/${st.id}`)
                            }}
                        >
                            <Typography>
                                {st.fullName}
                            </Typography>
                        </ButtonBase>
                    </Grid>
                )}
            </Grid>
        )
    }
}

export default withSnackbar(Class);