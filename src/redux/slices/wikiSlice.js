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
    fetchWikiBegin: (state) => {
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
      state.snippet = "Facts unavailable, but what a great dog!";
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchWikiBegin,
  fetchWikiSuccess,
  fetchWikiFailure,
} = wikiSlice.actions;

// Selectors
export const selectSnippet = (state) => state.wiki.snippet;

export const selectIsWikiLoading = (state) => state.wiki.loading;

export const selectIsWikiError = (state) => state.wiki.error;

export const selectTitle = (state) => state.wiki.title;

export default wikiSlice.reducer;
