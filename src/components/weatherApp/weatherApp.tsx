import React from 'react';

import { getApplicationRefreshRate } from 'src/utilities/settings';
import Header from 'src/components/header/header';
import ForecastList from 'src/components/forecastList/forecastList';
import { getForecast, getWeather } from 'src/services/openWeatherMapServices';
import OpenWeatherMapForecast from 'src/classes/openWeatherMapForecast';
import OpenWeatherMapWeather from 'src/classes/openWeatherMapWeather';
import OpenWeatherMapDay from 'src/classes/openWeatherMapDay';

import { OpenWeatherMapCommon } from 'src/interfaces/openWeatherMapCommon';
import { Weather } from 'src/interfaces/openWeatherMapWeather';
import { Forecast } from 'src/interfaces/openWeatherMapForecast';

import "src/components/weatherApp/weatherApp.scss";

const applicationRefreshRate = getApplicationRefreshRate();

export interface WeatherAppProps {

}

export interface WeatherAppState {
    apiRequestCount: number;
    weatherForecastData: OpenWeatherMapDay[] | any[];
    refreshCount: number;
    pregressCount: number;
    currentTemp: number;
}

class WeatherApp extends React.Component<WeatherAppProps, WeatherAppState> {

    weatherAppIntervalID: number = 0;

    state: WeatherAppState = {
        apiRequestCount: 0,
        weatherForecastData: [],
        refreshCount: applicationRefreshRate,
        pregressCount: 0,
        currentTemp: 0
    }

    async updateWeatherData() {

        const currentWeatherResponse: Weather.Response = await getWeather();
        const weatherForecastResponse: Forecast.Response = await getForecast();

        // TODO the Weather Interface should work here?
        const currentWeatherData: OpenWeatherMapCommon.Day = OpenWeatherMapWeather.getWeatherData(currentWeatherResponse)

        const openWeatherMapDay = new OpenWeatherMapDay(currentWeatherData);
        const openWeatherMapUForecast = new OpenWeatherMapForecast(weatherForecastResponse)

        const { apiRequestCount } = this.state;

        this.setState(
            {
                apiRequestCount: apiRequestCount + 1,
                currentTemp: openWeatherMapDay.getTemperatureRounded(),
                weatherForecastData: openWeatherMapUForecast.getFiveDayForecastData(),
                refreshCount: applicationRefreshRate,
                pregressCount: 0,
            }
        );
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

        const { pregressCount, apiRequestCount } = this.state;

        if (apiRequestCount === 0) {
            return;
        }

        let newProgess = pregressCount + (1 / applicationRefreshRate);

        if (newProgess > 100) {
            newProgess = 0;
        }

        this.setState({
            pregressCount: newProgess
        });

    }

    componentWillUnmount() {
        clearInterval(this.weatherAppIntervalID);
    }

    async componentDidMount() {

        this.updateWeatherData();

        let count = 1;

        setInterval(() => {

            if (count % (applicationRefreshRate * 100) === 0) {

                this.updateWeatherData();

            } else if (count % 100 === 0) {

                this.setReloadingCountDown();
                this.calculateProgress();

            } else if (count % 1 === 0) {

                this.calculateProgress();

            }

            count++;

        }, 10);

    }


    render() {

        const {
            currentTemp,
            pregressCount,
            refreshCount,
            weatherForecastData,
            apiRequestCount
        } = this.state;

        return (
            <React.Fragment>

                <Header
                    temp={currentTemp}
                    pregressCount={pregressCount}
                    refreshCount={refreshCount}
                    apiRequestCount={apiRequestCount}
                />

                <main>
                    <ForecastList weatherForecast={weatherForecastData} apiRequestCount={apiRequestCount} />
                </main>

            </React.Fragment>
        );
    }

}

export default WeatherApp;

