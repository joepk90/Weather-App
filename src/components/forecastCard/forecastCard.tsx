import React from 'react';

import Temperature from "src/components/temperature/temperature";
import Image from "src/components/common/image/image";
import OpenWeatherMapDay from 'src/classes/openWeatherMapDay';

import "src/components/forecastCard/forecastCard.scss";

export interface ForecastCardProps {
    forecast: OpenWeatherMapDay,
    apiRequestCount: number
}

class ForecastCard extends React.Component<ForecastCardProps> {

    renderDayName() {

        const { forecast } = this.props;

        const day: string = forecast.getDayName()

        if (day === '') {
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

        if (!temp || !apiRequestCount) {
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

        const weatherIconUrl: string = forecast.getWeatherIconURL();
        const weatherDescription: string = forecast.getWeatherDescription();

        if (weatherIconUrl === '' || weatherDescription === '') {
            return '';
        }

        return (
            <div className="forecast-card__icon">
                <Image
                    src={weatherIconUrl}
                    title={weatherDescription}
                />
            </div>
        );

    }

    renderWetherDescription() {

        const { forecast } = this.props;

        const weatherDescription: string = forecast.getWeatherDescription();

        if (weatherDescription === '') {
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

        const weatherIconUrl: string = forecast.getWeatherIconURL();
        const weatherDescription: string = forecast.getWeatherDescription();

        if (weatherIconUrl === '' || weatherDescription === '') {
            return '';
        }

        return (
            <div className="forecast-card__icon-wrapper">
                {this.renderWeatherIcon()}
                {this.renderWetherDescription()}
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






