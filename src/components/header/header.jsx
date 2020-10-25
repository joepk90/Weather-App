import React from 'react';

import Clock from "~components/common/clock/clock";
import Location from "~components/location/location";
import Temperature from "~components/temperature/temperature";
import ProgressBar from '~components/common/progressBar/progressBar';

import "~components/header/header.scss";

const Header = ({ refreshCount, pregressCount, temp, apiRequestCount }) => {

    return (
        <header className="header">

            <div className="header__top">

                <div className="header__clock">
                    <Clock />
                </div>

                <div className="header__stats">
                    <Location />
                    <Temperature temp={temp} apiRequestCount={apiRequestCount} />
                </div>
            </div>

            <div className="header__section">
                <span className="h6-font-size">Reloading in {refreshCount}s</span>
                <ProgressBar progress={pregressCount} />
            </div>


        </header>
    );
}

export default Header;