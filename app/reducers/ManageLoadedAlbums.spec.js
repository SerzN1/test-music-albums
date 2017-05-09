/* global describe, it, expect, should, jest, beforeEach, afterEach */
/* eslint-disable no-unused-vars */
import loadedAlbumsReducer from './ManageLoadedAlbums';
import * as types from '../actions/types';

describe('RoomSearchAdded reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      filter: '',
      items: [],
      count: -1,
      offset: 0,
      loading: false,
      error: null
    };
  });
  afterEach(() => {
    initialState = null;
  });

  it('should return default state on not relevant actions', () => {
    expect(loadedAlbumsReducer(undefined, {})).toEqual(initialState);
  });

  it('should set filter', () => {
    const action = {
      type: types.ALBUMS_FILTER,
      payload: 'filter_test'
    };

    expect(loadedAlbumsReducer(initialState, action))
      .toEqual({
        ...initialState,
        filter: action.payload
      });
  });

  it('should manage albums loading process', () => {
    const action = {type: types.ALBUMS_LOAD};

    expect(loadedAlbumsReducer(initialState, action))
      .toEqual({
        ...initialState,
        items: [],
        loading: true,
        count: -1,
        offset: 0,
        error: null
      });
  });

  it('should manage loaded albums', () => {
    const action = {
      type: types.ALBUMS_DONE,
      payload: {
        releases: [
          {id: 'release1'},
          {id: 'release2'},
        ],
        count: 2,
        offset: 0
      }
    };

    expect(loadedAlbumsReducer(initialState, action))
      .toEqual({
        ...initialState,
        loading: false,
        items: action.payload.releases,
        count: action.payload.count,
        offset: action.payload.offset
      });
  });

  it('should manage albums loading fail', () => {
    const action = {
      type: types.ALBUMS_FAIL,
      error: {
        message: 'Error example',
        description: 'Error description example'
      }
    };

    expect(loadedAlbumsReducer(initialState, action))
      .toEqual({
        ...initialState,
        loading: false,
        items: [],
        count: -1,
        offset: 0,
        error: action.error.message
      });
  });

});
