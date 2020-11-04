import React from 'react';
import Counter from 'src/components/common/animatedCounter/animatedCounter';

export interface TemperatureProps {
    apiRequestCount: number,
    temp: number
}

class Temperature extends React.Component<TemperatureProps> {

    shouldComponentUpdate(prevProps: TemperatureProps) {

        const { apiRequestCount } = this.props;

        if (apiRequestCount === prevProps.apiRequestCount) {
            return false;
        }

        return true;
    }

    render() {

        const { temp } = this.props;

        return (<span className="temperature"><Counter targetCount={temp} />&deg;</span>);
    }

}

export default Temperature;