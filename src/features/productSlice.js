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
    const updatedProducts = response.data.map((res) => ({
      ...res,
      stock: 20,
    }));
    return updatedProducts;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateStock: (state, action) => {
      const {id, stock } = action.payload;
      state.products.filter((product) => product.id === id)
      .map((product) => product.stock = stock);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      if (!state.products.length) {
        state.products = action.payload;
      }
    });
  },
});

export const getProductById = (state, productId) => {
  const products = state.products.products;

  if (Array.isArray(products)) {
    return products.find((product) => product.id === Number(productId));
  }

  return null;
};

export const { updateStock } = productSlice.actions;
export const getAllProduct = (state) => state.products.products;
export default productSlice.reducer;
