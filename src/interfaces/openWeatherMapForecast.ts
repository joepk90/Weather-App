import { OpenWeatherMapCommon } from "src/interfaces/openWeatherMapCommon";

export module Forecast {

    interface City {
        id: number;
        name: string;
        coord: OpenWeatherMapCommon.Coord;
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    }

    export interface Data {
        cod: number;
        message: number;
        cnt: number;
        list: OpenWeatherMapCommon.Day[];
        city: City
    }

    export interface Response {
        data: Data
    }

}