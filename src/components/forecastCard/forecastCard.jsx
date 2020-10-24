import React, { Component } from 'react';

import Temperature from "~components/temperature/temperature";

import "~components/forecastCard/forecastCard.scss";

class ForecastCard extends Component {
    state = {}
    render() {
        return (
            <div className="forecast-card">

                <div className="forecast-card__day h2-font-size text-uppercase">Mon</div>

                <div className="forecast-card__temp h2-font-size text-uppercase">
                    <Temperature />
                </div>

                <div className="forecast-card__icon">
                    <img src="http://openweathermap.org/img/wn/04n.png" alt="weather icon" />
                </div>

            </div>
        );
    }
}

export default ForecastCard;