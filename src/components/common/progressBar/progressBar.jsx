import React from 'react';

import '~components/common/progressBar/progressBar.scss';

const ProgressBar = ({ progress }) => {

    return (
        <div className="progress-bar">
            <div className="progress-bar__bar">
                <div className="progress-bar__progress" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}

export default ProgressBar;