export const initialState = {
  user: {
    uuid: "",
    password: "",
    role: "",
    data: {
      displayName: "",
      email: ""
    }
  },
  isAuth: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: { ...action.payload },
        isAuth: true
      };
    case "LOGOUT":
      return {
        ...state,
        user: {},
        auth: false
      };
    case "ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.type]: true
        }
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};

export default reducer;
