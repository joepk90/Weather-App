import React, { Component } from 'react';

import Clock from "~components/common/clock/clock";
import Location from "~components/location/location";
import Temperature from "~components/temperature/temperature";
import ProgressBar from '~components/common/progressBar/progressBar';
import OpenWeatherMapDay from '~classes/openWeatherMapDay';

import "~components/header/header.scss";

class WeatherAppHeader extends Component {
    state = {}

    render() {

        const { weather } = this.props;

        const openWeatherMapDay = new OpenWeatherMapDay(weather);

        return (
            <header className="header">

                <div className="header__top">

                    <div className="header__clock">
                        <Clock />
                    </div>

                    <div className="header__stats">
                        <Location />
                        <Temperature temp={openWeatherMapDay.getTemperatureRounded()} />
                    </div>
                </div>

                <div className="header__section">
                    <span className="h6-font-size">Reloading in 20s</span>
                    <ProgressBar />
                </div>


            </header>
        );
    }
}

export default WeatherAppHeader;