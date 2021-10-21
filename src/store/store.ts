import { configureStore } from '@reduxjs/toolkit'
import loginPageReducer from './loginPageSlice'
import usersTableReducer from './usersTableSlice'

export const store = configureStore({
  reducer: {
    loginPageReducer,
    usersTableReducer,
  }
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch