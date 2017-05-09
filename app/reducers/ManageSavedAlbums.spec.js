/* global describe, it, expect, should, jest, beforeEach, afterEach */
/* eslint-disable no-unused-vars */
import savedAlbumsReducer from './ManageSavedAlbums';
import * as types from '../actions/types';

describe('RoomSearchAdded reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      items: {},
      byId: []
    };
  });
  afterEach(() => {
    initialState = null;
  });

  it('should return default state on not relevant actions', () => {
    expect(savedAlbumsReducer(undefined, {})).toEqual(initialState);
  });

  it('should load saved items', () => {
    const action = {
      type: types.SAVED_ALBUMS_GET,
      payload: {
        items: {
          id1: {name: 'test_name1', id: 'id1'},
          id2: {name: 'test_name2', id: 'id2'},
        },
        byId: ['id1', 'id2']
      }
    };

    expect(savedAlbumsReducer(initialState, action))
      .toEqual({
        items: {
          id1: {name: 'test_name1', id: 'id1'},
          id2: {name: 'test_name2', id: 'id2'},
        },
        byId: ['id1', 'id2']
      });
  });

  it('should add item to saved items', () => {
    const action = {
      type: types.SAVED_ALBUMS_ADD,
      payload: {
        id: 'id1',
        name: 'test_name1'
      }
    };

    expect(savedAlbumsReducer(initialState, action))
      .toEqual({
        items: {
          'id1': {name: 'test_name1', id: 'id1'}
        },
        byId: ['id1']
      });
  });

  it('should remove item from saved items', () => {
    const action = {
      type: types.SAVED_ALBUMS_REMOVE,
      payload: 'id1'
    };

    expect(savedAlbumsReducer({
      items: {'id1': {name: 'test_name1', id: 'id1'}},
      byId: ['id1']
    }, action))
      .toEqual({
        items: {},
        byId: []
      });
  });

  it('should clear state of saved items', () => {
    const action = {type: types.SAVED_ALBUMS_CLEAR};

    expect(savedAlbumsReducer({
      items: {'id1': {name: 'test_name1', id: 'id1'}},
      byId: ['id1']
    }, action))
      .toEqual({
        items: {},
        byId: []
      });
  });

});
