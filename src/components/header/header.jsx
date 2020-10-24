import React, { Component } from 'react';

import Clock from "~components/common/clock/clock";
import Location from "~components/location/location";
import Temperature from "~components/temperature/temperature";
import ProgressBar from '~components/common/progressBar/progressBar';

import "~components/header/header.scss";

class WeatherAppHeader extends Component {
    state = {}
    render() {
        return (
            <header className="header">

                <div className="header__top">

                    <div className="header__clock">
                        <Clock />
                    </div>

                    <div className="header__stats">
                        <Location />
                        <Temperature />
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