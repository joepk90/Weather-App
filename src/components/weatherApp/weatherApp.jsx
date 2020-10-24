import React, { Component } from 'react';

import Header from '~components/header/header';

import "~components/weatherApp/weatherApp.scss";

class WeatherApp extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                <Header />

                <main>

                </main>

            </React.Fragment>
        );
    }
}

export default WeatherApp;