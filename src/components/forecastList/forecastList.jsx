import React, { Component } from 'react';

import ForecastCard from '~components/forecastCard/forecastCard';

import "~components/forecastList/forecastList.scss";

class forecastList extends Component {

    renderList() {

        const { weatherForecast } = this.props;

        if (!weatherForecast || !weatherForecast.length) {
            return '';
        }

        return (
            <div className="forecast-list">
                {weatherForecast.map((forecast) => <ForecastCard key={forecast.getDateTime()} forecast={forecast} />)}
            </div>
        );

    }

    render() {

        return (
            this.renderList()
        )
    }
}

export default forecastList;