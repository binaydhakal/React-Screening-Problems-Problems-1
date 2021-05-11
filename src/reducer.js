export const initialState = {
  colorList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD__COLOR":
      return {
        ...state,
        colorList: [...state.colorList, action.colour],
      };
    default:
      return state;
  }
};

export default reducer;
