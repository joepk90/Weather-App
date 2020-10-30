import React, { Component } from 'react';
import Counter from 'src/components/common/animatedCounter/animatedCounter';

class Temperature extends Component {

    shouldComponentUpdate(prevProps) {

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