import React, { Component } from 'react';

import { getApplicationRefreshRate } from '~utilities/settings';
import Clock from "~components/common/clock/clock";
import Location from "~components/location/location";
import Temperature from "~components/temperature/temperature";
import ProgressBar from '~components/common/progressBar/progressBar';
import OpenWeatherMapDay from '~classes/openWeatherMapDay';

import "~components/header/header.scss";

const applicationRefreshRate = getApplicationRefreshRate()

class WeatherAppHeader extends Component {

    state = {
        refreshCount: applicationRefreshRate,
        pregressCount: 0
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps !== this.props) {
            this.setState({
                refreshCount: applicationRefreshRate,
                pregressCount: 0
            })
        }
    }

    setReloadingCountDown() {

        const { refreshCount } = this.state;

        if (refreshCount > 0) {

            const newRefreshCount = refreshCount - 1;
            this.setState({
                refreshCount: newRefreshCount
            });
            return;
        }

        this.setState({
            refreshCount: applicationRefreshRate
        })

    }

    calculateProgress() {

        const { pregressCount } = this.state;

        let newProgess = pregressCount + (1 / applicationRefreshRate);

        if (newProgess > 100) {
            newProgess = 0;
        }

        this.setState({
            pregressCount: newProgess
        });

    }

    componentDidMount() {

        this.setReloadingCountDown();

        setInterval(async () => {

            this.setReloadingCountDown();

        }, 1000);


        setInterval(async () => {

            this.calculateProgress();

        }, 10);

    }

    render() {

        const { weather } = this.props;
        const { refreshCount, pregressCount } = this.state;

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
                    <span className="h6-font-size">Reloading in {refreshCount}s</span>
                    <ProgressBar progress={pregressCount} />
                </div>


            </header>
        );
    }
}

export default WeatherAppHeader;