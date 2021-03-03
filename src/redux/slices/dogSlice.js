import { createSlice } from "@reduxjs/toolkit";

export const dogSlice = createSlice({
  name: "dog",
  initialState: {
    url: "/",
    loading: false,
    error: false,
  },
  reducers: {
    fetchDogRequest: (state) => {
      state.loading = true;
    },
    fetchDogSuccess: (state, action) => {
      state.url = action.payload;
      state.loading = false;
    },
    fetchDogFailure: (state) => {
      state.url = "no dog found";
      state.loading = false;
      state.error = true;
    },
    clearData: (state) => {
      state.url = "/";
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  fetchDogRequest,
  fetchDogSuccess,
  fetchDogFailure,
  clearData,
} = dogSlice.actions;

// Selectors
export const selectDogUrl = (state) => state.dog.url;

export const selectIsDogLoading = (state) => state.dog.loading;

export const selectIsDogError = (state) => state.dog.error;

export default dogSlice.reducer;
