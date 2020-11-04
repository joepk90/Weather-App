import moment from 'moment';

import { OpenWeatherMapCommon } from "src/interfaces/openWeatherMapCommon";

class OpenWeatherMapDay {

    data: OpenWeatherMapCommon.Day;

    constructor(data: OpenWeatherMapCommon.Day) {
        this.data = data;
    }

    getTemperatureData(): OpenWeatherMapCommon.Main {

        return this.data.main;

    }

    getWeatherData(): OpenWeatherMapCommon.Weather {

        return this.data.weather[0];
    }

    getTemperature(): number {

        const temperatureData: OpenWeatherMapCommon.Main = this.getTemperatureData();

        return temperatureData.temp;

    }

    getTemperatureRounded(): number {

        return Math.round(this.getTemperature());

    }

    getDateTime(): number {

        return this.data.dt;

    }

    getDayName(): string {

        const epochDate: number = this.getDateTime()

        return moment(epochDate * 1000).format('ddd');

    }


    getWeatherIconName(): string {

        const weatherData: OpenWeatherMapCommon.Weather = this.getWeatherData();

        return weatherData.icon;

    }

    getWeatherIconURL(): string {

        const iconName: string = this.getWeatherIconName();

        return `http://openweathermap.org/img/wn/${iconName}.png`;

    }

    getWeatherDescription(): string {

        const weatherData: OpenWeatherMapCommon.Weather = this.getWeatherData();

        return weatherData.description;

    }

}


export default OpenWeatherMapDay