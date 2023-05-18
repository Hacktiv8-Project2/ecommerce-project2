import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import cartSlice from "./features/cartSlice";
import productSlice from "./features/productSlice";
import authReducer from "./features/auth/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth'] // Persisting only the 'auth' state to storage.
}

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// eslint-disable-next-line import/no-anonymous-default-export
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
