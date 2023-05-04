import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiPrivate } from "../config/api";


const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        isLoading: false,
        review: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.pending, (state, actions) => {
            state.isLoading = true
        })
        builder.addCase(fetchReviews.fulfilled, (state, actions) => {
            state.review = actions.payload
            state.isLoading = false
        })
        builder.addCase(fetchReviews.rejected, (state, actions) => {
            state.isLoading = true
        })
    }
})
export default reviewSlice.reducer;

export const fetchReviews = createAsyncThunk(
    "review/fetch",
    async (payload) => {
        const response = await apiPrivate.post("/get-review", payload);
        return response.data
    })
