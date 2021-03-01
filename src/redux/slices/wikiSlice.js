import { createSlice } from '@reduxjs/toolkit';

export const wikiSlice = createSlice({
    name: 'wiki',
    initialState: {
        wiki: {},
        loading: false,
        error: null
    },
    reducers: {
        fetchWikiBegin: state => {
            state.loading = true
        },
        fetchWikiSuccess: (state, action) => {
            state.wiki = action.payload
            state.loading = true
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default wikiSlice.reducer;
