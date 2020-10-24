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

}


export default OpenWeatherMapDay