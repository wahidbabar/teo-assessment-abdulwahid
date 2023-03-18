import { configureStore } from "@reduxjs/toolkit";
import dialpadReducer from "./dialpadSlice";

export const store = configureStore({
  reducer: {
    dialpad: dialpadReducer,
  },
});
