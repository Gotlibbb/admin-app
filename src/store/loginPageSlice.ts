import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authAPI } from '../api/api'


export const loginTC = createAsyncThunk(
  'loginPage/login',
  async (logValue: LoginValue, { dispatch }) => {
    dispatch(setLoading({ value: true }))
    const logObj: LoginValue = await authAPI.getLoginWithPassword()
    dispatch(setLoading({ value: false }))
    if (logObj.login === logValue.login && logObj.password === logValue.password) {
      localStorage['isAuthorized'] = 'true'
      dispatch(setAuthorized({ authorized: 'true' }))
    } else {
      dispatch(setError({ error: 'Login or password not valid' }))
    }

  }
)

export const logoutTC = createAsyncThunk(
  'loginPage/logout',
  (_, { dispatch }) => {
    localStorage['isAuthorized'] = 'false'
    dispatch(setAuthorized({ authorized: 'false' }))
  }
)

interface LoginValue {
  login: string
  password: string
}

interface LoginPageStateType {
  isAuthorized: 'false' | 'true'
  error: string
  loading: boolean
}

const initialState: LoginPageStateType = {
  isAuthorized: localStorage['isAuthorized'] || 'false',
  error: '',
  loading: false
}


const loginPageSlice = createSlice(
  {
    name: 'loginPage',
    initialState,
    reducers: {
      setAuthorized (state, action: PayloadAction<{ authorized: 'false' | 'true' }>) {
        state.isAuthorized = action.payload.authorized
      },
      setError (state, action: PayloadAction<{ error: string }>) {
        state.error = action.payload.error
      },
      setLoading (state, action: PayloadAction<{ value: boolean }>) {
        state.loading = action.payload.value
      }
    }
  }
)

export const {
  setAuthorized,
  setLoading,
  setError
} = loginPageSlice.actions

export default loginPageSlice.reducer