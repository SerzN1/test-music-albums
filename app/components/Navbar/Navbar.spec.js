/* global describe, it, expect, should, jest, beforeEach */
/* eslint-disable no-unused-vars */
jest.mock('react-router');

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IndexLink, Link } from 'react-router';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  const NAV_ITEMS = [
    {
      name: 'Saved albums',
      url: '/saved'
    }
  ];

  it('should render correctly', () => {
    const component = shallow(<Navbar />);
    expect(component).toHaveLength(1);
  });

  it('should render <IndexLink />', () => {
    const component = mount(<Navbar />);
    expect(component.find(IndexLink)).toHaveLength(1);
  });
  it('should render nav items', () => {
    const component = mount(<Navbar />);
    expect(component.find(Link)).toHaveLength(NAV_ITEMS.length);
  });
});
