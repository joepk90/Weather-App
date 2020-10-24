import React, { Component } from 'react';

import Header from '~components/header/header';
import ForecastList from '~components/forecastList/forecastList';
import { getWeather } from '~services/openWeatherMapServices';

import "~components/weatherApp/weatherApp.scss";

class WeatherApp extends Component {
    state = {
        currentWeatherData: {}
    }


    async componentDidMount() {

        let currentWeatherData = await getWeather();

        this.setState(
            {
                currentWeatherData
            }
        );


    }


    render() {

        const { currentWeatherData } = this.state;

        return (
            <React.Fragment>

                <Header weather={currentWeatherData} />

                <main>
                    <ForecastList />
                </main>

            </React.Fragment>
        );
    }
}

export default WeatherApp;