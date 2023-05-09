import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiPrivate } from "../config/api";


const paymentSlice = createSlice({
  name: 'stripe',
  initialState: {
    isLoading: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(payment.pending, (state, actions) => {
      state.isLoading = true
    })
    builder.addCase(payment.fulfilled, (state, actions) => {
      state.isLoading = false
    })
    builder.addCase(payment.rejected, (state, actions) => {
      state.isLoading = true
    })
  }
})
export default paymentSlice.reducer;

export const payment = createAsyncThunk(
  "Stripe/pay",
  async (payload) => {
    const response = await apiPrivate.post("/payment/pay", payload);
    // console.log(response);
    return response.data
  })
