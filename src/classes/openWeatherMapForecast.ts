import moment from 'moment';

import { OpenWeatherMapCommon } from "src/interfaces/openWeatherMapCommon";
import { Forecast } from "src/interfaces/openWeatherMapForecast";
import OpenWeatherMapDay from 'src/classes/openWeatherMapDay';


class OpenWeatherMapForecast {

    data: Forecast.Data;

    constructor(data: Forecast.Response) {
        this.data = this.getForecastData(data);
    }

    getForecastData(data: Forecast.Response): Forecast.Data {
        return data.data;
    }

    getForecastList(): OpenWeatherMapCommon.Day[] {

        // is this check required? isn't the interface already confirming this property exists?
        if (!this.data.hasOwnProperty('list')) {
            return [];
        }

        return this.data.list;

    }

    getFiveDayForecastData(): OpenWeatherMapDay[] {

        const forcastData: OpenWeatherMapCommon.Day[] = this.getForecastList();

        let forecastFiveDayArray: OpenWeatherMapDay[] = [];

        let maxTemp: number = 0;
        let dayCount: number = 0
        let currentDay: number = moment().add(dayCount, 'day').endOf('day').unix();
        const maxDays: number = 5
        forcastData.forEach((forecast) => {

            // limit forcast to 5 days
            if (dayCount + 1 >= maxDays) {
                return;
            }

            let dayForecast: OpenWeatherMapDay = new OpenWeatherMapDay(forecast);
            let dateTime: number = dayForecast.getDateTime();
            let temp: number = dayForecast.getTemperature();


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


export default OpenWeatherMapForecast