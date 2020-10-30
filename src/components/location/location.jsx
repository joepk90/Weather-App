import React, { Component } from 'react';

import "src/components/location/location.scss";

// TODO additional feature. convert to select element. allow user to select location

class Location extends Component {
    state = {}
    render() {
        return (
            <div className="location">
                London
            </div>
        );
    }
}

export default Location;