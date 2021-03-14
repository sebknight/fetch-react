import { createSlice } from "@reduxjs/toolkit";
import { cleanTitle, cleanSnippet } from "../../utils/utils";

export const wikiSlice = createSlice({
  name: "wiki",
  initialState: {
    title: "",
    snippet: "",
    pageId: 0,
    loading: false,
    error: false,
  },
  reducers: {
    fetchWikiRequest: (state) => {
      state.loading = true;
    },
    fetchWikiSuccess: (state, action) => {
      state.title = cleanTitle(action.payload.title);
      state.snippet = cleanSnippet(action.payload.snippet);
      state.pageId = action.payload.pageid;
      state.loading = false;
    },
    fetchWikiFailure: (state) => {
      state.title = "Cool Dog";
      state.snippet = "No facts found, but that's a great dog!";
      state.pageId = 0;
      state.loading = false;
      state.error = true;
    },
    clearData: (state) => {
      state.title = "";
      state.snippet = "";
      state.pageId = 0;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  fetchWikiRequest,
  fetchWikiSuccess,
  fetchWikiFailure,
  clearData,
} = wikiSlice.actions;

// Selectors
export const selectIsWikiLoading = (state) => state.wiki.loading;

export const selectSnippet = (state) => state.wiki.snippet;

export const selectTitle = (state) => state.wiki.title;

export const selectPageId = (state) => state.wiki.pageId;

export const selectIsWikiError = (state) => state.wiki.error;

export default wikiSlice.reducer;
