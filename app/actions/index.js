import { createAction } from 'redux-actions';
import * as types from './types';
import * as rest  from '../rest';
import {
  getItems,
  clearItems,
  saveItem,
  removeItem
} from '../utils/downloadService';

export const filterAlbums = createAction(types.ALBUMS_FILTER);
const albumsLoad = createAction(types.ALBUMS_LOAD);
const albumsDone = createAction(types.ALBUMS_DONE);

export function searchAlbums(query) {
  return (dispatch) => {
    dispatch(albumsLoad());
    return rest.searchAlbums(query)
      .then(res => dispatch(albumsDone(res)))
      .catch(error => dispatch({
        type: types.ALBUMS_FAIL,
        error
      }));
  };
}

export function getSavedAlbums() {
  return {
    type: types.SAVED_ALBUMS_GET,
    payload: getItems()
  };
}
export function addSavedAlbums(id, item) {
  return {
    type: types.SAVED_ALBUMS_ADD,
    payload: saveItem(id, item)
  };
}
export function removeSavedAlbums(id) {
  return {
    type: types.SAVED_ALBUMS_REMOVE,
    payload: removeItem(id)
  };
}
export function clearSavedAlbums() {
  return {
    type: types.SAVED_ALBUMS_CLEAR,
    payload: clearItems()
  };
}
