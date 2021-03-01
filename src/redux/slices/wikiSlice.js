import { createSlice } from '@reduxjs/toolkit';
import { pipe } from 'ramda';

export const wikiSlice = createSlice({
    name: 'wiki',
    initialState: {
        title: '',
        snippet: '',
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
            state.loading = false
        },
        fetchWikiFailure: state => {
            state.loading = false
            state.error = true
        },
    },
});

export const { fetchWikiBegin, fetchWikiSuccess, fetchWikiFailure } = wikiSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount));
//     }, 1000);
// };

const scrubHTML = snippet => snippet.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, '');
const escQuotes = snippet => snippet.replace(/&quot;/ig, '"');
const firstSentence = snippet => `${snippet.substring(0, snippet.indexOf('.'))}.`;

const cleanSnippet = snippet => pipe(scrubHTML, escQuotes, firstSentence)(snippet)

export const selectSnippet = state => cleanSnippet(state.wiki.snippet)

// Get the first sentence of the snippet

/* Following functions reduce garbage output
Some snippets seem to start mid-sentence */
// const hasCaps = firstSentence[0] !== firstSentence[0].toLowerCase();


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default wikiSlice.reducer;
