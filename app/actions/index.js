import * as types from './types';
import * as rest  from '../rest';

export function getData(query) {
  return (dispatch) => {
    return rest.getData(query)
      .then(res => dispatch({
        type: types.DATA_GET,
        payload: res
      }));
  };
}
