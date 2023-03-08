import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch(
      "https://mostaphaashour.github.io/burger_api/burger-data-api.json"
    );
    const r = await res.json();
    const data = await r.data;
    return data;
  }
);
export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = productsSlice.actions;
export default productsSlice.reducer;
