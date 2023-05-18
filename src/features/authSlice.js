import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk('auth/login', async ({username, password}) => {
  try {
    if (username === "johnd" && password === "m38rmF$") {

      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password,
      });

      return response.data.token;
    }

    return Promise.reject("Invalid username and password");

  } catch(error) {
    throw(error);
  }
});

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  errorMessage: '',
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.errorMessage = '';
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.errorMessage = '';
    })
    .addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.errorMessage = '';
      state.token = action.payload;
    })
    .addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.errorMessage = action.error.message;
    })
  }
});

export const { userLogout } = authSlice.actions;
export default authSlice.reducer;