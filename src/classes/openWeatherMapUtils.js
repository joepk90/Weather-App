import OpenWeatherMapDay from 'src/classes/openWeatherMapDay';
import moment from 'moment';

class OpenWeatherMapUtils {

    constructor(data) {
        this.data = this.getData(data);
    }


    getData(data) {

        if (!data || !data.data) {
            return null;
        }

        return data.data;

    }

    getForecastList() {

        if (!this.data.hasOwnProperty('list')) {
            return null;
        }

        return this.data.list;

    }

    getForecastData() {

        const forcastData = this.getForecastList();

        let forecastFiveDayArray = [];

        let maxTemp = 0;
        let dayCount = 0
        let currentDay = moment().add(dayCount, 'day').endOf('day').unix();
        const maxDays = 5
        forcastData.forEach((forecast) => {

            // limit forcast to 5 days
            if (dayCount + 1 >= maxDays) {
                return;
            }

            let dayForecast = new OpenWeatherMapDay(forecast);
            let dateTime = dayForecast.getDateTime();
            let temp = dayForecast.getTemperature();


            // if dataset is for the next day. update dayCount and currentDay
            if (dateTime > currentDay) {
                dayCount++;
                currentDay = moment().add(dayCount, 'day').endOf('day').unix();
            }

            // set data for day if not yet set
            if (!forecastFiveDayArray[dayCount]) {
                forecastFiveDayArray[dayCount] = dayForecast;
                return;
            }

            if (temp > maxTemp) {
                maxTemp = temp
                forecastFiveDayArray[dayCount] = dayForecast;
                return;
            }

        })

        return forecastFiveDayArray;

    }

}


export default OpenWeatherMapUtils