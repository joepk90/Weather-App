
const getApplicationRefreshRate = function () {
    const refreshRate = process.env.REACT_APP_APPLICATION_REFRESH_RATE
    return refreshRate ? refreshRate : 60;
}

const getOpenWeatherApiKey = function () {
    return process.env.REACT_APP_BASE_URL_OPEN_WEATHER_MAP_API_KEY;
}

export {
    getApplicationRefreshRate,
    getOpenWeatherApiKey
};