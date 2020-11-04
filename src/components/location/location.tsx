import React from 'react';

import "src/components/location/location.scss";

// TODO additional feature. convert to select element. allow user to select location

export interface LocationProps { }

const Location: React.FC<LocationProps> = () => {
    return (
        <div className="location">
            London
        </div>
    );
}

export default Location;