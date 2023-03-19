import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './searchSlice'
import { nounApi } from './apiSlice'

export const store = configureStore({
  reducer: {
    search: searchSlice,
    nounApi: nounApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nounApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
