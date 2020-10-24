import axios from '~services/httpsService';

const APPID = process.env.REACT_APP_BASE_URL_OPEN_WEATHER_MAP_API_KEY;

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