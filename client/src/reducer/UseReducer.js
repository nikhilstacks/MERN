export const initialState = null;

export const reducer = (state, action) => {
  if (action === "USER") {
    return action.payload;
  }

  return state;
};
