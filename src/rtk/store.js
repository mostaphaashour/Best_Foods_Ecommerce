import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import FavoriteSlice from "./slices/FavoriteSlice";
import productsSlice from "./slices/productslice";
export const store = configureStore({
  reducer: {
    products: productsSlice,
    Cart: CartSlice,
    Fav: FavoriteSlice,
  },
});
