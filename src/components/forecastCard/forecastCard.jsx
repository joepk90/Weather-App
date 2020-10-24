import React, { Component } from 'react';

import Temperature from "~components/temperature/temperature";
import Image from "~components/common/image/image";

import "~components/forecastCard/forecastCard.scss";

class ForecastCard extends Component {

    state = {}

    render() {

        const { forecast } = this.props;

        return (
            <div className="forecast-card">

                <div className="forecast-card__day h2-font-size text-uppercase">
                    {forecast.getDayName()}
                </div>

                <div className="forecast-card__temp h2-font-size text-uppercase">
                    <Temperature temp={forecast.getTemperatureRounded()} />
                </div>

                <div className="forecast-card__icon">
                    <Image src={forecast.getWeatherIconURL()} alt={forecast.getWeatherDescription()} />
                </div>

            </div>
        );
    }
}

export default ForecastCard;