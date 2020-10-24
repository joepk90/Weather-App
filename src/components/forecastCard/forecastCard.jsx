import React, { Component } from 'react';

import Temperature from "~components/temperature/temperature";
import Image from "~components/common/image/image";

import "~components/forecastCard/forecastCard.scss";

class ForecastCard extends Component {

    state = {
        temp: 0,
        day: '',
        weatherIconUrl: '',
        weatherDescription: '',
    }

    componentDidMount() {

        const { forecast } = this.props;

        this.setState({
            temp: forecast.getTemperatureRounded(),
            day: forecast.getDayName(),
            weatherIconUrl: forecast.getWeatherIconURL(),
            weatherDescription: forecast.getWeatherDescription()
        });
    }

    render() {

        const { temp, day, weatherIconUrl, weatherDescription } = this.state;

        return (
            <div className="forecast-card">

                <div className="forecast-card__day h3-font-size text-uppercase">
                    {day}
                </div>

                <div className="forecast-card__temp h2-font-size text-uppercase">
                    <Temperature temp={temp} />
                </div>

                <div className="forecast-card__icon">
                    <Image src={weatherIconUrl} alt={weatherDescription} />
                </div>

            </div>
        );
    }
}

export default ForecastCard;