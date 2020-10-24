import React, { Component } from 'react';

import '~components/common/progressBar/progressBar.scss';

class ProgressBar extends Component {

    state = {};

    render() {

        return (
            <div className="progress-bar">
                <div className="progress-bar__bar"></div>
            </div>
        );
    }
}

export default ProgressBar;