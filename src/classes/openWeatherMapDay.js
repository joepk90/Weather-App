import moment from 'moment';

class OpenWeatherMapDay {

    constructor(data) {
        this.data = this.getData(data);
    }

    getData(data) {

        if (!data || !data.data) {
            return null;
        }

        return data.data;

    }

    getTemperatureData() {

        if (!this.data) {
            return null;
        }

        if (!this.data.hasOwnProperty('main')) {
            return null;
        }

        return this.data.main;

    }

    getWeatherData() {

        if (!this.data.hasOwnProperty('weather')) {
            return null;
        }

        if (!this.data.weather.length) {
            return null;
        }

        return this.data.weather[0];
    }

    getTemperature() {

        const temperatureData = this.getTemperatureData();

        if (temperatureData === null) {
            return null;
        }

        if (!temperatureData.hasOwnProperty('temp')) {
            return null;
        }

        return temperatureData.temp;

    }

    getTemperatureRounded() {

        return Math.round(this.getTemperature());

    }

    getDateTime() {

        if (!this.data.hasOwnProperty('dt')) {
            return null;
        }

        return this.data.dt;

    }

    getDayName() {

        const epochDate = this.getDateTime()

        if (epochDate === null) {
            return '';
        }

        return moment(epochDate * 1000).format('ddd');

    }


    getWeatherIconName() {

        const weatherData = this.getWeatherData();

        if (weatherData === null) {
            return null;
        }

        if (!weatherData.hasOwnProperty('icon')) {
            return null;
        }

        return weatherData.icon;

    }

    getWeatherIconURL() {

        const iconName = this.getWeatherIconName();

        if (iconName === null) {
            return '';
        }

        return `http://openweathermap.org/img/wn/${iconName}.png`;

    }

    getWeatherDescription() {

        const weatherData = this.getWeatherData();

        if (weatherData === null) {
            return null;
        }

        if (!weatherData.hasOwnProperty('description')) {
            return null;
        }

        return weatherData.description;

    }

}


export default OpenWeatherMapDay