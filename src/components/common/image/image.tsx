import React from 'react';

interface ImageProps {
    src: string,
    title: string
}

class Image extends React.Component<ImageProps> {

    render() {

        const { src, title } = this.props;

        if (src === '') {
            return '';
        }

        return (
            <img src={src} alt={title} />
        );
    }
}

export default Image;
