# Weather App

After cloning the application using GIT and installing the project dependancies using npm, the following steps will need to be done.

#### Copy the .env-example file
```sh
$ cp .env-example .env
```

#### Add your Open Weather Maps API Key
```sh
REACT_APP_BASE_URL_OPEN_WEATHER_MAP_API_KEY=YOUR_KEY
```

#### Optionally you change the applications refresh rate by using the following envronement variable
If not set the default is 60 seconds
```sh
REACT_APP_APPLICATION_REFRESH_RATE=10
```

### To start the run the project run the following command
```sh
$ npm start
```