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
  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;
        cartTotal.total += amount * price;
        cartTotal.amount += amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );

    total = parseFloat(total.toFixed(2));
    return { ...state, amount, total };
  }
  if (action.type === "SHOW_LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_CART") {
    return { ...state, loading: false, cart: action.payload };
  }
  return state;
};
