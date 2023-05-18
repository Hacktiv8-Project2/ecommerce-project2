import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  checkout: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let oldItems = state.cart.filter((item) => item.id !== action.payload.id);
      let newItems = state.cart.filter((item) => item.id === action.payload.id);
      let newQty = newItems.length ? newItems[0]?.qty + 1 : 1;
      newItems.length
        ? (newItems[0] = { ...action.payload, qty: newQty })
        : (newItems = [{ ...action.payload, qty: newQty }]);
      oldItems.push(newItems[0]);
      state.cart = oldItems;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    },
    incrementItem: (state, action) => {
      state.cart
        ?.filter((item) => item.id === action.payload)
        .map((item) => {
          const currentVal = item.qty;
          item.qty = currentVal + 1;
          return item;
        });
    },
    decrementItem: (state, action) => {
      state.cart
        ?.filter((item) => item.id === action.payload)
        .map((item) => {
          const currentVal = item.qty;
          if (currentVal == 1) {
            item.qty = currentVal;
          } else {
            item.qty = currentVal - 1;
          }
          return item;
        });
    },

    // updateStock: (state, action) => {
    //   state.cart
    //     ?.filter((item) => item.id === action.payload)
    //     .map((item) => {
    //       const currentStock = item.stock;
    //       if (item.qty <= currentStock) {
    //         item.stock = currentStock - item.qty;
    //       } else {
    //         item.stock = currentStock;
    //       }
    //       return item;
    //     });
    // },
    clearCart: (state, action) => (state.cart = []),
    setCheckout: (state, action) => {
      state.checkout = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  clearCart,
  setCheckout,
  // updateStock,
} = cartSlice.actions;
export const getAllCart = (state) => state.cart.cart;
export const getAllCheck = (state) => state.cart.checkout;
export default cartSlice.reducer;
