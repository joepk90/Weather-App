import React from 'react';
import Counter from '~components/common/animatedCounter/animatedCounter';

const Temperature = ({ temp }) => {
    return (<span className="temperature"><Counter targetCount={temp} />&deg;</span>);
}

export default Temperature;