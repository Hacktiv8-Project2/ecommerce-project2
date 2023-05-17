import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(URL);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });


    // [fetchProducts.pending]: () => console.log("pending"),
    // [fetchProducts.fulfilled]: (state, { payload }) => {
    //   console.log("fetch successfully");
    //   return { ...state, products: payload };
    // },
    // [fetchProducts.rejected]: () => console.log("rejected"),
  },
});

export const getProductById = (state, productId) => {
  const products = state.products;

  if (Array.isArray(products)) {
    return products.find((product) => product.id === Number(productId));
  }

  return null;
};

export const getAllProduct = (state) => state.products.products;
export default productSlice.reducer;
