import { createSlice } from '@reduxjs/toolkit';
import { cleanSnippet } from '../../utils/utils';

export const wikiSlice = createSlice({
    name: 'wiki',
    initialState: {
        title: '',
        snippet: 'Facts unavailable, but what a great dog!',
        pageId: '',
        loading: false,
        error: false
    },
    reducers: {
        fetchWikiBegin: state => {
            state.loading = true
        },
        fetchWikiSuccess: (state, action) => {
            state.title = action.payload.title
            state.snippet = action.payload.snippet
            state.pageId = action.payload.pageid
            state.loading = false
        },
        fetchWikiFailure: state => {
            state.loading = false
            state.error = true
            state.snippet = 'Facts unavailable, but what a great dog!'
        },
    },
});

export const { fetchWikiBegin, fetchWikiSuccess, fetchWikiFailure } = wikiSlice.actions;

// Selectors
export const selectSnippet = state => cleanSnippet(state.wiki.snippet);

export const selectIsWikiLoading = state => state.wiki.loading;

export const selectIsWikiError = state => state.wiki.error;

// Remove anything in brackets e.g. disambiguation
export const selectTitle = state =>
    state.wiki.title.includes('(') ?
        state.wiki.title.substring('0', state.wiki.title.indexOf('(')) :
        state.wiki.title;

export default wikiSlice.reducer;
