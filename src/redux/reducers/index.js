const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_FAVORITE':
      return { ...state, myList: [...state.myList, payload] };
    default:
      return state;
  }
};

export default reducer;
