export module OpenWeatherMapCommon {

    // only in forecast endpoint
    // interface Sys {
    //     pod: string;
    // }

    export interface Coord {
        lon: number;
        lat: number;
    }

    export interface Wind {
        speed: number;
        deg: number;
    }

    export interface Clouds {
        all: number;
    }

    export interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    export interface Main {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    }

    export interface Day {
        dt: number;
        main: Main;
        weather: Weather[]
        clouds: Clouds;
        wind: Wind;
        visibility: number;
        // pop: number; // only in forecast endpoint
        // sys: Sys // only in forecast endpoint
        // dt_text: string; // only in forecast endpoint
    }

}