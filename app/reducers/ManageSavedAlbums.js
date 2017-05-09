import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const initialState = {
  items: {},
  byId: []
};

export default handleActions({
  [types.SAVED_ALBUMS_GET](state, { payload }) {
    const {items, byId} = payload;
    return {
      ...state,
      byId,
      items
    };
  },
  [types.SAVED_ALBUMS_ADD](state, { payload }) {
    const byId = Array.prototype.slice(state.byId);
    byId.push(payload.id);

    return {
      ...state,
      byId,
      items: {
        ...state.items,
        [payload.id]: payload
      }
    };
  },
  [types.SAVED_ALBUMS_REMOVE](state, { payload }) {
    const items = {...state.items};
    delete items[payload];
    const byId = state.byId.filter((id) => id !== payload);
    return {
      ...state,
      items,
      byId
    };
  },
  [types.SAVED_ALBUMS_CLEAR](state) {
    return {
      ...state,
      items: {},
      byId: []
    };
  }
}, initialState);
