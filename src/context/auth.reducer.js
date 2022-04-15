export const initialState = {
  user: {
    uuid: "",
    password: "",
    role: "",
    data: {
      displayName: "",
      email: ""
    },
    auth: true
  },
  errors: {
    email: false,
    password: false
  },
  isLoading: false,
  isAuth: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: action.data
        },
        auth: true
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
