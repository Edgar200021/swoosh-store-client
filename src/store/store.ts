import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { appApi } from './appApi'
import userReducer from './user/userSlice'
import sneakerReducer from './sneaker/sneakerSlice'

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    user: userReducer,
    sneaker: sneakerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(appApi.middleware),
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
