import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    addToCart: (state, action) => {
      const newclone = { ...action.payload.e, amount: action.payload.inp };
      state.push(newclone);
    },
    removeFromCart: (state, action) => {
      return state.filter((e) => e.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
