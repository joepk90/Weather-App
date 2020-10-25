import React, { Component } from 'react';

import ForecastCard from '~components/forecastCard/forecastCard';

import "~components/forecastList/forecastList.scss";

class forecastList extends Component {

    shouldComponentUpdate(prevProps) {

        const { apiRequestCount } = this.props;

        if (apiRequestCount === prevProps.apiRequestCount) {
            return false;
        }

        return true;
    }

    renderList() {

        const { weatherForecast, apiRequestCount } = this.props;

        if (!weatherForecast || !weatherForecast.length) {
            return '';
        }

        return (
            <div className="forecast-list">
                {weatherForecast.map((forecast) => <ForecastCard key={forecast.getDateTime()} forecast={forecast} apiRequestCount={apiRequestCount} />)}
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