class OpenWeatherMapUtils {

    constructor(data) {
        this.data = data;
    }


    getData(data) {

        if (!data || !data.data) {
            return null;
        }

        return data.data;

    }

    getForcastData() {

        // TODO return array of data for the next 5 days
        // TODO for each day find dataset with highest temperature

    }

}


export default OpenWeatherMapUtils