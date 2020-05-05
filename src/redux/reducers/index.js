const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_FAVORITE':
      if (state.myList.filter((item) => payload.id === item.id).length > 0) {
        return { ...state };
      }
      return { ...state, myList: [...state.myList, payload] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default reducer;
