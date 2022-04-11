import { Dropdown } from '../Dropdown';
import{ shallow } from 'enzyme';
import React from 'react';

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow (<Dropdown children={<div/>} button={<button/>} />)
    expect(wrapper).toBeDefined();
    // expect(wrapper.find('#button')).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })

  test('should render (snapshot)', () => {
    const wrapper = shallow (<Dropdown children={<div/>} button={<button/>} />)

    expect(wrapper).toMatchSnapshot();
  })
})
