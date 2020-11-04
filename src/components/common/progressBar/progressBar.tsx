import React from 'react';

import 'src/components/common/progressBar/progressBar.scss';

type ProgressBarProps = {
    progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {

    return (
        <div className="progress-bar">
            <div className="progress-bar__bar">
                <div className="progress-bar__progress" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}

export default ProgressBar;