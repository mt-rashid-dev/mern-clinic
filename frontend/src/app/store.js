import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "../features/theme/themeSlice.js";

export default configureStore({
  reducer: {
    theme: themeReducer
  }
});