import React, { Component } from 'react';

import ForecastCard from '~components/forecastCard/forecastCard';

import "~components/forecastList/forecastList.scss";

class forecastList extends Component {
    state = {}
    render() {
        return (
            <div className="forecast-list">
                <ForecastCard />
            </div>
        );
    }
}

export default forecastList;