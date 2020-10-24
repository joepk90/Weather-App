import React, { Component } from 'react';

import "~components/common/clock/clock.scss";

class Clock extends Component {
    state = {}

    appendLeadingZero(time, places) {

        return String(time).padStart(places, '0')

    }

    setTime() {

        const time = new Date();

        this.setState({
            hours: this.appendLeadingZero(time.getHours(), 2),
            minutes: this.appendLeadingZero(time.getMinutes(), 2),
            seconds: this.appendLeadingZero(time.getSeconds(), 2)
        });

    }

    componentDidMount() {

        this.setTime();

        setInterval(async () => {

            this.setTime();

        }, 1000);
    }

    render() {

        const { hours, minutes, seconds } = this.state;

        return (
            <div className="clock">
                <span className="clock__time">{hours}:{minutes}:{seconds} GMT</span>
            </div>
        );
    }
}

export default Clock;