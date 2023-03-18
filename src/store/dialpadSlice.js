import { createSlice, current } from "@reduxjs/toolkit";

export const dialpadSlice = createSlice({
  name: "dialpad",
  initialState: "",
  reducers: {
    appendDialValue: (state, action) => {
      return state + action.payload;
    },
    removeLastDialVaue: (state, action) => {
      return state.slice(0, state.length - 1);
    },
  },
});

export const { appendDialValue, removeLastDialVaue } = dialpadSlice.actions;

export default dialpadSlice.reducer;
