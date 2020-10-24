import React, { Component } from 'react';

import Header from '~components/header/header';
import ForecastList from '~components/forecastList/forecastList';
import { getForecast, getWeather } from '~services/openWeatherMapServices';
import OpenWeatherMapUtils from '~classes/openWeatherMapUtils';

import "~components/weatherApp/weatherApp.scss";

const applicactionRefreshRate = 60;

class WeatherApp extends Component {
    state = {
        currentWeatherData: {},
        weatherForecast: {}
    }

    async updateWeatherData() {

        const currentWeatherResponse = await getWeather();
        const weatherForecastResponse = await getForecast();

        const openWeatherMapUForecast = new OpenWeatherMapUtils(weatherForecastResponse)

        this.setState(
            {
                currentWeatherData: currentWeatherResponse,
                weatherForecastData: openWeatherMapUForecast.getForecastData()
            }
        );
    }

    async componentDidMount() {

        this.updateWeatherData();

        setInterval(async () => {

            this.updateWeatherData();

        }, applicactionRefreshRate * 1000);

    }

    render() {

        const { currentWeatherData, weatherForecastData } = this.state;

        return (
            <React.Fragment>

                <Header weather={currentWeatherData} />

                <main>
                    <ForecastList weatherForecast={weatherForecastData} />
                </main>

            </React.Fragment>
        );
    }
}

export default WeatherApp;