import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice.js";
// import navigationSlice from "./navigation/navigationSlice.js";
// import loaderSlice from "./loader/loaderSlice.ts";
// import snackbarSlice from "./snackbar/snackbarSlice.js";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    // navigation: navigationSlice,
    // loader: loaderSlice,
    // snackbar: snackbarSlice,
  },
});
