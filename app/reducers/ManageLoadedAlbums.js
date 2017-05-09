import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const initialState = {
  filter: '',
  items: [],
  count: -1,
  offset: 0,
  loading: false,
  error: null
};

export default handleActions({
  [types.ALBUMS_FILTER](state, {payload}) {
    return {
      ...state,
      filter: payload
    };
  },
  [types.ALBUMS_LOAD](state) {
    return {
      ...state,
      items: [],
      loading: true,
      count: -1,
      error: null
    };
  },
  [types.ALBUMS_DONE](state, {payload}) {
    const {releases, count, offset} = payload;
    return {
      ...state,
      loading: false,
      items: releases,
      count,
      offset
    };
  },
  [types.ALBUMS_FAIL](state, {error}) {
    return {
      ...state,
      loading: false,
      items: [],
      count: -1,
      offset: 0,
      error: error.message
    };
  }
}, initialState);
