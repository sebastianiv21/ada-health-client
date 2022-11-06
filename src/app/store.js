import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    // dynamic reference to the apiSlice
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // add default api middleware with concat
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})
