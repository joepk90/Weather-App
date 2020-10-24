import React, { Component } from 'react';

class Temperature extends Component {
    state = {}
    render() {

        const { temp } = this.props;

        return (
            <span className="temperature">{temp} &deg;</span>
        );
    }
}

export default Temperature;