import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "../actions/CartActions";

const InitailState = {
  items: [],
  message: "",
};

const CartReducer = (state = InitailState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        message: "items added succesfully",
      };

    default:
      return state;
  }
};

export default CartReducer;
