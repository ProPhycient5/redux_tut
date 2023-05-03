import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant";

const cardItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("data_in_reducer", action.data);
      return [...state, { cardData: action.data }];
    case REMOVE_FROM_CART:
      state.pop();
      return [...state];
    default:
      return state;
  }
};

export default cardItems;
