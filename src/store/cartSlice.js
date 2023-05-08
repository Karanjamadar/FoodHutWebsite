import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiPrivate } from '../config/api';

// thunk to add the food items to the  cart
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (payload) => {
    let response = await apiPrivate.post('/cart/add-to-cart', payload);
    console.log(response.data)
    return response.data;
  }
);

// Thunk to fetch the food items
export const fetchCartData = createAsyncThunk(
  'cart/fetchFood',
  async (payload) => {
    let response = await apiPrivate.post('/cart/fetch-cart-data', payload);
    return response.data;
  }
);
// Thunk to fetch the food items
export const increment = createAsyncThunk(
  'cart/increment',
  async (payload) => {
    let response = await apiPrivate.post('/cart/increment-by-one', payload);
    return response.data;
  }
);
// Thunk to fetch the food items
export const decrement = createAsyncThunk(
  'cart/decrement',
  async (payload) => {
    let response = await apiPrivate.post('/cart/decrement-by-one', payload);
    return response.data;
  }
);
// Thunk to fetch the food items
export const deleteFromCart = createAsyncThunk(
  'cart/delete',
  async (payload) => {
    let response = await apiPrivate.post('/cart/delete-item-from-cart', payload);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isLoading: false,
    cartData: [],
  },
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addToCart.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartData = action.payload.data;
      })
      .addCase(fetchCartData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(increment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartData = action.payload.data;
      })
      .addCase(increment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(increment.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(decrement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartData = action.payload.data;
      })
      .addCase(decrement.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(decrement.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartData = action.payload.data;
      })
      .addCase(deleteFromCart.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.isLoading = true;
      })
  },
});

// export const { } =
//   cartSlice.actions;

export default cartSlice.reducer;
