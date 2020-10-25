import React, { Component } from 'react';

class Counter extends Component {

    countIntervalID = 0;

    state = {
        currentCount: 0,
    }

    componentDidUpdate(prevProps, prevState) {

        let { targetCount } = this.props;
        let { currentCount } = this.state;

        if (targetCount === currentCount && prevProps !== this.props) {

            this.setState({ currentCount: 0 });
            this.setCountCheckInterval();

        } else if (targetCount === currentCount) {
            clearInterval(this.countIntervalID);
        }

    }

    setCountCheckInterval() {

        this.countIntervalID = setInterval(() => {

            let { targetCount } = this.props;
            let { currentCount } = this.state;

            if (currentCount < targetCount) {

                let newCurrentCount = currentCount + 1;
                this.setState({ currentCount: newCurrentCount });

            } else if (currentCount > targetCount) {

                let newCurrentCount = currentCount - 1;
                this.setState({ currentCount: newCurrentCount });

            }

        }, 100);

    }

    componentDidMount() {
        this.setCountCheckInterval();
    }

    render() {

        const { currentCount } = this.state;

        return <React.Fragment>{currentCount}</React.Fragment>
    }
}

export default Counter;