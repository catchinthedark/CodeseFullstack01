import React, { Component } from 'react';

export default class Params extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { match: { params } } = this.props;
        console.log(params);
        return (
            <div>
                {params.param}
            </div>
        )
    }
}
