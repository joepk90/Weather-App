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

        return Math.round(temperatureData.temp);

    }

}


export default OpenWeatherMapDay