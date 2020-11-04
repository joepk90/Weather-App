import React from "react";
import { render, fireEvent } from '@testing-library/react'
import ProgressBar from 'src/components/common/progressBar/progressBar';

// import Enzyme, { shallow, mount } from 'enzyme';
// import Adapter from "enzyme-adapter-react-16";
// Enzyme.configure({ adapter: new Adapter() });

// import App from 'src/App';
// import ShallowRenderer from 'react-test-renderer/shallow';

// it("renders without crashing", () => {
//     shallow(<App />);
// });

it("renders correctly", () => {
    const { findAllByText } = render(<ProgressBar progress={5} />);


    expect(findAllByText('hello')).toBeTruthy();

});


// describe('ProgressBar Component', () => {
//     it('should return a valid JSX', () => {


        // const renderer = new ShallowRenderer();
        // const testRenderer = ShallowRenderer.create(<MyComponent />);

        // renderer.render(<ProgressBar progress={5} />);
        // const result = testRenderer.toJSON();

        // console.log(result);

        // const wrapper = shallow(<ProgressBar progress={5} />);
        // expect(wrapper.contains(<div className="progress-bar__progress" style="width: 5px;"></div>)).toBe(true);


        // expect(wrapper).toEqual({});

        // const wrapper = shallow(<ProgressBar progress={5} />);
        // const progressBar = wrapper.find('.progress-bar__progress');

        // const progressBarHTML = <div className="progress-bar__progress" style="width: 5px;"></div>;
        // expect(result).toContain(<div className="progress-bar__progress" style="width: 5px;"></div>);

        // let containerStyle = wrapper.get(0).style;
        // expect(containerStyle).to.have.property('opacity', '1');

        // expect(progressBar.style).toBe('width: 5px;');

    // });
// });
