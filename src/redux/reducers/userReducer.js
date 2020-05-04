const initialState = {};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'USER_NAME':
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default userReducer;
