import { OpenWeatherMapCommon } from "src/interfaces/openWeatherMapCommon";
import { Weather } from "src/interfaces/openWeatherMapWeather";

class OpenWeatherMapWeather {

    static getWeatherData(data: Weather.Response): OpenWeatherMapCommon.Day {
        return data.data;
    }

}

export default OpenWeatherMapWeather;