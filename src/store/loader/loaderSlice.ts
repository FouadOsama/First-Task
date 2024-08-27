import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoaderState } from "../state.types";

const initialState: LoaderState = {
  isLoading: false,
  isSkeletonLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showHideLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    showHideSkeletonLoader: (state, action: PayloadAction<boolean>) => {
      state.isSkeletonLoading = action.payload;
    },
  },
});

export const { showHideLoader, showHideSkeletonLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
