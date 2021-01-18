import {
  UPDATE_QUERY
} from './types';

export const updateQuery = query => {
  return {
    type: UPDATE_QUERY,
    payload: query
  };
};
