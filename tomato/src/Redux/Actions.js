export const menulistAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading
    }
  };
};

export const foodlistAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading
    }
  };
};