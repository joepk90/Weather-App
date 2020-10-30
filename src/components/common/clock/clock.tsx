import React from 'react';

import "src/components/common/clock/clock.scss";

export interface ClockProps { }

export interface ClockState {
    hours: number,
    minutes: number,
    seconds?: number,
}

class Clock extends React.Component<ClockProps, ClockState> {

    clockIntervalID: any;

    state: ClockState = { ...this.getTime() }

    appendLeadingZero(time: number, places: number) {

        return String(time).padStart(places, '0')

    }

    getTime() {

        const time = new Date();

        return {
            hours: parseInt(this.appendLeadingZero(time.getHours(), 2)),
            minutes: parseInt(this.appendLeadingZero(time.getMinutes(), 2)),
            seconds: parseInt(this.appendLeadingZero(time.getSeconds(), 2))
        }

    }

    setTime() {

        this.setState({ ...this.getTime() });

    }

    componentDidMount() {

        this.setTime();

        this.clockIntervalID = setInterval(() => {

            this.setTime();

        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockIntervalID);
    }

    decoration() {
        return (
            <div className="clock__decor">
                <span className="clock__decor-oval clock__decor-oval--light"></span>
                <span className="clock__decor-oval clock__decor-oval--half"></span>
                <span className="clock__decor-oval clock__decor-oval--full"></span>
            </div>
        );
    }

    render() {

        const { hours, minutes } = this.state;

        return (
            <div className="clock">
                <div className="clock__panel">
                    {this.decoration()}
                    <span className="clock__time">{hours}:{minutes} GMT</span>
                    {this.decoration()}
                </div>
            </div>
        );
    }
}

export default Clock;