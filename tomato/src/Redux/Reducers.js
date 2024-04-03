export const menulistReducer = (state, payload) => {
  return {
    ...state,
    menulistData: payload && payload.data && payload.data,
    menulistMsg: payload && payload.message && payload.message,
    menulistLoading: payload && payload.loading && payload.loading
  };
};

export const foodlistReducer = (state, payload) => {
  return {
    ...state,
    foodlisttData: payload && payload.data && payload.data,
    foodlisttDataMessage: payload && payload.message && payload.message,
    foodlistLoading: payload && payload.loading && payload.loading
  };
};