import React, { Component } from 'react';
import API from '../../api';
import { Grid, ButtonBase, Typography } from '@material-ui/core';
import { withSnackbar } from 'notistack';

class AllStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listStudent: []
        }
    }

    async componentDidMount() {
        const res = await API.studentAPI.getAll();
        if (res.status) {
            this.setState({
                listStudent: res.data
            })
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    render() {
        return (
            <Grid container spacing={5} direction="column" style={{marginLeft: 20}}>
                {this.state.listStudent.map((st) => {
                    return <Grid item>
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
                })}
            </Grid>
        )
    }
}

export default withSnackbar(AllStudent);