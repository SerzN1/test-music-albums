/* global describe, it, expect, should, jest, beforeEach, afterEach */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { AlbumSearch } from './AlbumSearch';
jest.mock('../../components/Album');

describe('<AlbumSearch />', () => {
  const dataModel = {
    filter: '',
    items: [
      {name: 'test item 1', id: 'itemId1'},
      {name: 'test item 2', id: 'itemId2'},
      {name: 'test item 3', id: 'itemId3'},
    ],
    count: 1,
    loading: false,
    error: null,
    savedItems: {},
    searchAlbums: () => {},
    filterAlbums: () => {},
    getSavedAlbums: () => {},
    addSavedAlbums: () => {},
    removeSavedAlbums: () => {},
  };

  it('should render correctly', () => {
    const component = shallow(<AlbumSearch {...dataModel} />);
    expect(component).toHaveLength(1);
  });

  it('should render <Album /> inside', () => {
    const component = shallow(<AlbumSearch {...dataModel} />);
    expect(component.find('Album')).toHaveLength(dataModel.items.length);
  });

});
