import React, { Component } from 'react';

import Clock from "~components/common/clock/clock";

import "~components/header/header.scss";


class WeatherAppHeader extends Component {
    state = {}
    render() {
        return (
            <header className="header">

                <div className="header__stats">
                    <Clock />
                </div>

            </header>
        );
    }
}

export default WeatherAppHeader;