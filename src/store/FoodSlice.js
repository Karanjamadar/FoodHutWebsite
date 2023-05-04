import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiPrivate } from '../config/api';

export const Statuses = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})
const FoodSlice = createSlice({
    name: 'food',
    initialState: {
        isLoading: false,
        foods: [],
        food: null

    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFood.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchFood.fulfilled, (state, actions) => {
            state.foods = actions.payload;
            state.isLoading = false
        })
        builder.addCase(fetchFood.rejected, (state, actions) => {
            state.isLoading = false;
        })
        builder.addCase(fetchSingleFood.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchSingleFood.fulfilled, (state, actions) => {
            state.food = actions.payload;
            state.isLoading = false
        })
        builder.addCase(fetchSingleFood.rejected, (state, actions) => {
            state.isLoading = false;
        })
    }
});

export const { setProducts, setStatus } = FoodSlice.actions;
export default FoodSlice.reducer;

// Thunk 
export const fetchFood = createAsyncThunk(
    "foods/fetch",
    async (payload) => {
        const response = await apiPrivate.post("/food/get-food-items", payload)
        console.log(response.data)
        return response.data;
    })
export const fetchSingleFood = createAsyncThunk(
    "food/fetchSingleFood",
    async (payload) => {
        const response = await apiPrivate.post("/food/get-single-food-item", payload);
        return response.data;
    })
