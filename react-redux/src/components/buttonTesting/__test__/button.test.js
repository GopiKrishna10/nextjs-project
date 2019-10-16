import React from 'react';
import ReactDom from 'react-dom';
import Button from './../button';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
it('renders with out crashing', () =>{
    const div = document.createElement('div');
    ReactDom.render(<Button></Button>,div);
});

it('renders button correctly',() => {
    const {getByTestId} = render(<Button lable="click me please"></Button>);
    expect(getByTestId('button')).toHaveTextContent('click me please');
})

it('matches snapshot', () => {
    const tree = renderer.create(<Button lable="click me please"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})