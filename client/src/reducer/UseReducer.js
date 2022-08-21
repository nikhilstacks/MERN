//specifying the initial state of the application and passing it through all application via useContext
export const initialState = null;

//reducer function setting state by calling action-------------------------------------------------------
export const reducer = (state, action) => {
  if (action.type === "USER") {
    console.log(action.payload);
    return action.payload;
  }
  console.log(state);
  return state;
};
