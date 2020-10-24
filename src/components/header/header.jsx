import React, { Component } from 'react';

import Clock from "~components/common/clock/clock";
import Location from "~components/location/location";
import Temperature from "~components/temperature/temperature";

import "~components/header/header.scss";


class WeatherAppHeader extends Component {
    state = {}
    render() {
        return (
            <header className="header">

                <div className="header__stats">
                    <Location />
                    <Temperature />
                </div>

                <div className="header__clock">
                    <Clock />
                </div>

            </header>
        );
    }
}

export default WeatherAppHeader;