import React, { Component } from 'react';

import Temperature from "src/components/temperature/temperature";
import Image from "src/components/common/image/image";

import "src/components/forecastCard/forecastCard.scss";

class ForecastCard extends Component {

    renderDayName() {

        const { forecast } = this.props;

        const day = forecast.getDayName()

        if (!day) {
            return '';
        }

        return (
            <div className="forecast-card__day h3-font-size text-uppercase">
                {day}
            </div>
        );

    }

    renderTemperature() {

        const { forecast, apiRequestCount } = this.props;

        const temp = forecast.getTemperatureRounded();

        if (!temp) {
            return '';
        }

        return (
            <div className="forecast-card__temp h2-font-size text-uppercase">
                <Temperature temp={temp} apiRequestCount={apiRequestCount} />
            </div>
        );

    }

    renderWeatherIcon() {

        const { forecast } = this.props;

        const weatherIconUrl = forecast.getWeatherIconURL();
        const weatherDescription = forecast.getWeatherDescription();

        if (!weatherIconUrl || !weatherDescription) {
            return '';
        }

        return (
            <div className="forecast-card__icon">
                <Image src={weatherIconUrl} alt={weatherDescription} />
            </div>
        );

    }

    renderWetherDescription() {

        const { weatherDescription } = this.props;

        if (!weatherDescription) {
            return '';
        }

        return (
            <p className="forecast-card__description h6-font-size text-uppercase">
                {weatherDescription}
            </p>
        );

    }

    renderWeatherDetails() {

        const { forecast } = this.props;

        const weatherIconUrl = forecast.getWeatherIconURL();
        const weatherDescription = forecast.getWeatherDescription();

        if (!weatherIconUrl || !weatherDescription) {
            return;
        }

        return (
            <div className="forecast-card__icon-wrapper">

                {this.renderWeatherIcon()}
                {this.renderWetherDescription()}

                <p className="forecast-card__description h6-font-size text-uppercase">
                    {weatherDescription}
                </p>

            </div>
        );

    }

    render() {

        return (
            <div className="forecast-card">
                {this.renderDayName()}
                {this.renderTemperature()}
                {this.renderWeatherDetails()}
            </div>
        );
    }
}

export default ForecastCard;