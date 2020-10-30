import React, { Component } from 'react';

import WeatherApp from "src/components/weatherApp/weatherApp.jsx";

class App extends Component {

    render() {

        return (
            <div className="app">
                <WeatherApp />
            </div>
        );
    }
}

export default App;
