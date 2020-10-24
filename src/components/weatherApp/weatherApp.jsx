import React, { Component } from 'react';

import Header from '~components/header/header';
import ForecastList from '~components/forecastList/forecastList';

import "~components/weatherApp/weatherApp.scss";


class WeatherApp extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                <Header />

                <main>
                    <ForecastList />
                </main>

            </React.Fragment>
        );
    }
}

export default WeatherApp;