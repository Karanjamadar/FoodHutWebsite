import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const Statuses = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})
const GallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        isLoading: false,
        gallery: [],

    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGalleryItems.pending, (state, action) => {
            state.isLoading = true
        })
            .addCase(fetchGalleryItems.fulfilled, (state, actions) => {
                state.gallery = actions.payload;
                state.isLoading = false
            })
            .addCase(fetchGalleryItems.rejected, (state, actions) => {
                state.isLoading = false;
            })
    }
});

export const { setProducts, setStatus } = GallerySlice.actions;
export default GallerySlice.reducer;

// Thunk 
export const fetchGalleryItems = createAsyncThunk(
    "gallery/fetch",
    async () => {
        const response = await axios.get("http://localhost:3001/get-gallery-items")
        return response.data;
    })
