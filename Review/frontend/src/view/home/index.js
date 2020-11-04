import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../api';
import { Grid, ButtonBase, Typography } from '@material-ui/core';
import { withSnackbar } from 'notistack';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listClass: []
        }
    }

    async componentDidMount() {
        const res = await API.classAPI.getAll();
        console.log(res);
        if (res.status) {
            this.setState({
                listClass: res.data
            })
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }

    render() {
        return (
            <Grid container spacing={5} direction="column">
                {this.state.listClass.map((cl) => {
                    return <Grid item>
                        <ButtonBase
                            onClick={() => {
                                this.props.history.push(`/class/${cl.id}`)
                            }}
                        >
                            <Typography>
                                {cl.className}
                            </Typography>
                        </ButtonBase>
                    </Grid>
                })}
            </Grid>
        )
    }
}

export default withSnackbar(Home);