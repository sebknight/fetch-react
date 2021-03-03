import { createSlice } from "@reduxjs/toolkit";

export const dogSlice = createSlice({
  name: "dog",
  initialState: {
    url: "",
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
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchDogRequest,
  fetchDogSuccess,
  fetchDogFailure,
} = dogSlice.actions;

// Selectors
export const selectDogUrl = (state) => state.dog.url;

export const selectIsDogLoading = (state) => state.dog.loading;

export const selectIsDogError = (state) => state.dog.error;

export default dogSlice.reducer;
