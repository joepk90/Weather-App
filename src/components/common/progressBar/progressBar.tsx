import React from 'react';

import 'src/components/common/progressBar/progressBar.scss';

type ProgressBarProps = {
    progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {

    return (
        <div id="progress-bar" className="progress-bar" style={{ display: 'block' }}>
            <div className="progress-bar__bar">
                <div className="progress-bar__progress" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}

export default ProgressBar;