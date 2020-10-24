import axios from '~services/httpsService';
import { getOpenWeatherApiKey } from '~utilities/settings';

const APPID = getOpenWeatherApiKey();

function axiosGetData(endPoint) {

    const axiosParams = {
        params: {
            q: 'London,UK',
            units: 'metric',
            APPID: APPID
        }
    }

    return axios.get(endPoint, axiosParams);
}

export function getForecast() {
    return axiosGetData('forecast');
}


export function getWeather() {
    return axiosGetData('weather');
}