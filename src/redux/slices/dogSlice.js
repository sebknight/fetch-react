import { createSlice } from '@reduxjs/toolkit';

export const dogSlice = createSlice({
    name: 'dog',
    initialState: {
        url: '',
        loading: false,
        error: null
    },
    reducers: {
        fetchDogRequest: state => {
            state.loading = true
        },
        fetchDogSuccess: (state, action) => {
            state.url = action.payload
            state.loading = false
        },
        fetchDogFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
});

export const { fetchDogRequest, fetchDogSuccess, fetchDogFailure } = dogSlice.actions;

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
export const selectDog = state => state.url;

// Break down the response to extract the breed name
export const selectBreed = state => {
    const path = state.dog.url
    const pathArr = path.split('/')
    const breedIndex = pathArr[4]
    return breedIndex.replace('-', '%20')
}

export default dogSlice.reducer;
