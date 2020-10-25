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
        shakeTempElement: false
    }

    componentDidMount() {

        console.log('test');

        const { forecast } = this.props;

        this.setState({
            temp: forecast.getTemperatureRounded(),
            day: forecast.getDayName(),
            weatherIconUrl: forecast.getWeatherIconURL(),
            weatherDescription: forecast.getWeatherDescription()
        });
    }

    didComponentUpdate(prevProps, prevState) {

        console.log('test');
        console.log(prevState);

        if (prevState.temp !== this.state.temp) {

            console.log('shake element');

            this.setState({
                shakeTempElement: true
            });

            setTimeout(() => {
                this.setState({
                    shakeTempElement: false
                });
            }, 3000)

        }

    }

    render() {

        const { temp, day, weatherIconUrl, weatherDescription, shakeTempElement } = this.state;

        return (
            <div className="forecast-card">

                <div className="forecast-card__day h3-font-size text-uppercase">
                    {day}
                </div>

                <div className="forecast-card__temp h2-font-size text-uppercase" data-shake={shakeTempElement}>
                    <Temperature temp={temp} />
                </div>

                <div className="forecast-card__icon-wrapper">

                    <div className="forecast-card__icon">
                        <Image src={weatherIconUrl} alt={weatherDescription} />
                    </div>

                    <p className="forecast-card__description h6-font-size text-uppercase">
                        {weatherDescription}
                    </p>

                </div>

            </div>
        );
    }
}

export default ForecastCard;