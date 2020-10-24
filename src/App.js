import React, { Component } from 'react';

import WeatherApp from '~components/weatherApp/weatherApp';

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
