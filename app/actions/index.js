import { createAction } from 'redux-actions';
import * as types from './types';
import * as rest  from '../rest';

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
