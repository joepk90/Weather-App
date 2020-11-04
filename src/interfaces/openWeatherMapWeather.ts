/**
 * https://github.com/AndersCan/weather-api/blob/master/models/CurrentWeatherDataResponse.ts
 */

import { OpenWeatherMapCommon } from "src/interfaces/openWeatherMapCommon";

export module Weather {

    interface Wind extends OpenWeatherMapCommon.Wind {
        gust: number;
    }

    export interface Sys {
        type: number;
        id: number;
        message: number;
        country: string;
        sunrise: number;
        sunset: number;
    }

    export interface Data extends OpenWeatherMapCommon.Day {
        base: string;
        visibility: number;
        wind: Wind;
        dt: number;
        sys: Sys;
        timezone: number;
        id: number;
        name: string;
        cod: number;
    }

    export interface Response {
        data: Data
    }
}