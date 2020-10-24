import React, { Component } from 'react';

import '~components/common/progressBar/progressBar.scss';

class ProgressBar extends Component {

    state = {};

    render() {

        const { progress } = this.props;

        return (
            <div className="progress-bar">
                <div className="progress-bar__bar">
                    <div className="progress-bar__progress" style={{ width: `${progress}%` }}></div>
                </div>


            </div>
        );
    }
}

export default ProgressBar;