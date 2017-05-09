/* global describe, it, expect, should, jest, beforeEach */
/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow} from 'enzyme';
import SearchForm from './SearchForm';

describe('<SearchForm />', () => {
  const dataModel = {
    defaultValue: '',
    onInput: () => {},
    onSubmit: () => {},
  };

  it('should render correctly', () => {
    const component = shallow(<SearchForm {...dataModel} />);
    expect(component).toHaveLength(1);
  });

  it('should handle input change', () => {
    const mockedInputHandler = jest.fn();
    const component = shallow(<SearchForm {...dataModel} onInput={mockedInputHandler} />);
    component.find('input').simulate('change', {target: {value: 'New value'}});
    expect(mockedInputHandler).toHaveBeenCalled();
  });

  it('should handle submit', () => {
    const mockedSubmitHandler = jest.fn();
    const component = shallow(<SearchForm {...dataModel} onSubmit={mockedSubmitHandler} />);
    component.simulate('submit');
    expect(mockedSubmitHandler).toHaveBeenCalled();
  });
});
