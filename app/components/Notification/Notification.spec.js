/* global describe, it, expect, should, jest, beforeEach */
/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow} from 'enzyme';
import Notification from './Notification';

describe('<Notification />', () => {
  it('should render correctly', () => {
    const component = shallow(<Notification message={'42'} />);
    expect(component).toHaveLength(1);
  });

  it('should render message', () => {
    const testMessage = 'Test message';
    const component = shallow(<Notification message={testMessage} />);
    expect(component.text()).toEqual(testMessage);
  });
});
