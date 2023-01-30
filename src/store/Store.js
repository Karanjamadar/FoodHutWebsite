import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from './GallerySlice';
import foodReducer from './FoodSlice'
import AuthReducer from './authSlice';
import reviewReducer from './reviewSlice';

const store = configureStore({
    reducer: {
        gallery: galleryReducer,
        food: foodReducer,
        auth: AuthReducer,
        review:reviewReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})
export default store;