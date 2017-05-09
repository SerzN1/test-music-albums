/* global describe, it, expect, should, jest, beforeEach */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Album from './Album';


describe('<Album />', () => {
  const dataModel = {
    showSave: false,
    saved: false,
    id: 'test-id',
    title: 'Title',
    count: 1,
    date: '2012',
    country: 'RU',
    'artist-credit': [
      {artist: {id: 'artist-id', name: 'artist name'}}
    ],
    'label-info': [
      {label: {id: 'label-id', name: 'label 1'}},
      {label: {id: 'label-id2', name: 'label 2'}}
    ],
    'track-count': 42,
    actionHandler: () => {},
  };

  it('should render correctly', () => {
    const component = mount(<Album {...dataModel} />);
    expect(component).toHaveLength(1);
  });

  it('should render title', () => {
    const component = mount(<Album {...dataModel} />);
    expect(component.find('.albumTitle')).toHaveLength(1);
  });

  it('should handle action on button click', () => {
    const mockedActionHandler = jest.fn();
    const component = mount(<Album {...dataModel} actionHandler={mockedActionHandler} />);
    const button = component.find('button');
    button.simulate('click');
    expect(mockedActionHandler).toHaveBeenCalled();
  });

});
