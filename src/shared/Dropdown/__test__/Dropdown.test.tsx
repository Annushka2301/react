import { Dropdown } from '../Dropdown';
import{ configure, shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

describe('Dropdown', () => {
  configure({ adapter: new Adapter() });

  test('should render', () => {
    const wrapper = shallow (<Dropdown children={<div/>} button={<button/>} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('#button')).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })

  test('should render (snapshot)', () => {
    const wrapper = shallow (<Dropdown children={<div/>} button={<button/>} />)

    expect(wrapper).toMatchSnapshot();
  })
})
