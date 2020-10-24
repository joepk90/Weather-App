import { React, Component } from 'react';

class Image extends Component {

    render() {

        const { src, title } = this.props;

        if (!src) {
            return '';
        }

        return (
            <img src={src} alt={title} />
        );
    }
}

export default Image;