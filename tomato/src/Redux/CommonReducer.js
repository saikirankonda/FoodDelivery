import {INITIAL_STATE} from "./INITIAL_STATE"
import {menulistReducer,foodlistReducer} from "./Reducers"

const reducers = {
  MENULIST_DATA_START: menulistReducer,
  MENULIST_DATA_SUCCESS: menulistReducer,
  MENULIST_DATA_FAILURE: menulistReducer,

  FOODLIST_DATA_START: foodlistReducer,
  FOODLIST_DATA_SUCCESS: foodlistReducer,
  FOODLIST_DATA_FAILURE: foodlistReducer,
}

export const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};