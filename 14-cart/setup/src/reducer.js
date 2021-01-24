export const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "INCREASE_ITEM") {
    const newCart = state.cart.map((item) => {
      if (item.id == action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === "DECREASE_ITEM") {
    const newCart = state.cart
      .map((item) => {
        if (item.id == action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return {
      ...state,
      cart: newCart,
    };
  }
  return state;
};
