import React from 'react';

import ForecastCard from 'src/components/forecastCard/forecastCard';
import OpenWeatherMapDay from 'src/classes/openWeatherMapDay';

import "src/components/forecastList/forecastList.scss";


export interface ForecastListProps {
    apiRequestCount: number;
    weatherForecast: OpenWeatherMapDay[]
}


class ForecastList extends React.Component<ForecastListProps> {

    shouldComponentUpdate(prevProps: ForecastListProps) {

        const { apiRequestCount } = this.props;

        if (apiRequestCount === prevProps.apiRequestCount) {
            return false;
        }

        return true;
    }

    renderList() {

        const { weatherForecast, apiRequestCount } = this.props;

        if (!weatherForecast.length) {
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

export default ForecastList;

