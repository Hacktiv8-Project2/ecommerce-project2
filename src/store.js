import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import productSlice from "./features/productSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    auth: authReducer,
  },
});
