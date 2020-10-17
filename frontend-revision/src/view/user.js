import React from 'react';
import { Typography, Paper } from '@material-ui/core';


export default class UserPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Paper>
                <Typography>
                    Welcome {this.props.username}!!!
                </Typography>
            </Paper>
        )
    }
}
