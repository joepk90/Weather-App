import React from 'react';

import Clock from "src/components/common/clock/clock";
import Location from "src/components/location/location";
import Temperature from "src/components/temperature/temperature";
import ProgressBar from 'src/components/common/progressBar/progressBar';

import "src/components/header/header.scss";

interface HeaderProps {
    refreshCount: number,
    pregressCount: number,
    temp: number,
    apiRequestCount: number
}

const Header: React.FC<HeaderProps> = ({ refreshCount, pregressCount, temp, apiRequestCount }) => {
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
                <span className="font-size-small" style={{ paddingLeft: '5px' }}>Reloading in {refreshCount}s</span>
                <ProgressBar progress={pregressCount} />
            </div>

        </header>
    );
}

export default Header;