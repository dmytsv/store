import { combineReducers } from 'redux';
import { ACTION_NAMES } from '../actions';

const itemsByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_NAMES.SET_ITEMS_BY_ID:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
const itemsIdsArrayReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_NAMES.SET_ITEMS_ID_ARRAY:
      return [...action.payload];
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  itemsById: itemsByIdReducer,
  itemsIds: itemsIdsArrayReducer,
});
