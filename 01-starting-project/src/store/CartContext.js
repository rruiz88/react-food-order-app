import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: () => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
