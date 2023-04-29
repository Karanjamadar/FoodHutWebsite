import axios from "axios";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const reviewSlice = createSlice({
    name:'review',
    initialState:{
        isLoading:false,
        review:[]
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchReviews.pending, (state,actions)=>{
            state.isLoading = true
        })
        builder.addCase(fetchReviews.fulfilled,(state,actions)=>{
            state.review=actions.payload
            state.isLoading = false
        })
        builder.addCase(fetchReviews.rejected, (state,actions)=>{
            state.isLoading= true
        })
    }
})
export default reviewSlice.reducer;

export const fetchReviews=createAsyncThunk(
    "review/fetch",
    async()=>{
        const response = await axios.get("http://localhost:3001/get-review")
        return response.data
    })
