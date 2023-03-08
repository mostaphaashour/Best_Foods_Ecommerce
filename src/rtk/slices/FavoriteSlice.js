import { createSlice } from "@reduxjs/toolkit";
export const FavoriteSlice = createSlice({
  initialState: [],
  name: "FavoriteSlice",
  reducers: {
    addToFav: (state, action) => {
      const found = state.find((e) => e.id === action.payload.id);
      if (!found) state.push(action.payload);
    },
    removefromFav: (state, action) => {
      return state.filter((e) => e.id !== action.payload.id);
    },
  },
});
export const { addToFav, removefromFav } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
