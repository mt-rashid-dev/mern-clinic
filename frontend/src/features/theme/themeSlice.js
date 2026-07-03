import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "theme",
  initialState: {
    value: "light"
  },
  reducers: {
    enableDarkTheme: (state) => {
      state.value = "dark";
    },
    enableLightTheme: (state) => {
      state.value = "light";
    }
  }
});

export const { enableDarkTheme, enableLightTheme } = counterSlice.actions;

export default counterSlice.reducer;