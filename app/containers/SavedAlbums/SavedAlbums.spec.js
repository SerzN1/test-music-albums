/* global describe, it, expect, should, jest, beforeAll, beforeEach */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import SavedAlbumsConnected, { SavedAlbums } from './SavedAlbums';
jest.mock('../../components/Album');

describe('<SavedAlbums />', () => {
  const dataModel = {
    items: {},
    byId: ['3', '4'],
    getSavedAlbums: () => {},
    clearSavedAlbums: () => {},
    addSavedAlbums: () => {},
    removeSavedAlbums: () => {},
  };

  it('should render correctly', () => {
    expect(shallow(<SavedAlbums {...dataModel} />)).toHaveLength(1);
  });

  it('should render albums', () => {
    const component = shallow(<SavedAlbums {...dataModel} />);
    expect(component.find('Album')).toHaveLength(dataModel.byId.length);
  });

  it('should handle clear button click', () => {
    const mockedClearSavedAlbumsHandler = jest.fn();
    const component = shallow(<SavedAlbums {...dataModel} clearSavedAlbums={mockedClearSavedAlbumsHandler} />);
    const clearButton = component.find('button').at(0);
    clearButton.simulate('click');
    expect(mockedClearSavedAlbumsHandler).toHaveBeenCalled();
  });
});
