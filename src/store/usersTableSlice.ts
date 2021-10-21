import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { usersApi, UserType, UserTypeCreate } from '../api/api'
import { setLoading } from './loginPageSlice'

export const getUsersTC = createAsyncThunk(
  'usersTable/getUsers',
  async (_, { dispatch }) => {
    dispatch(setLoading({ value: true }))
    try {
      const users: UserType[] = await usersApi.setUsers()
      dispatch(setUsers({ users }))
    } catch (e) {
      dispatch(setError({ error: 'no users added' }))
    }
    dispatch(setLoading({ value: false }))
  }
)
export const deleteUserTC = createAsyncThunk(
  'usersTable/deleteUser',
  async (userId: string, { dispatch }) => {
    dispatch(setLoading({ value: true }))
    try {
      await usersApi.deleteUser(userId)
      dispatch(deleteUser({ userId }))
    } catch (e) {
      dispatch(setError({ error: 'not found id' }))
    }
    dispatch(setLoading({ value: false }))

  }
)
export const createUserTC = createAsyncThunk(
  'usersTable/createUser',
  async (user: UserTypeCreate, { dispatch }) => {
    dispatch(setLoading({ value: true }))
    try {
      await usersApi.postUser({ ...user })
      await dispatch(getUsersTC())
    } catch (e) {
      dispatch(setError({ error: 'user not added' }))
    }
    dispatch(setLoading({ value: false }))
  }
)
export const updateUserTC = createAsyncThunk(
  'usersTable/updateUser',
  async (arg: { user: Partial<UserType>, currUserId: string }, thunkAPI) => {
    thunkAPI.dispatch(setLoading({ value: true }))
    try {
      await usersApi.updateUser(arg.currUserId, arg.user)
      thunkAPI.dispatch(updateUser({ user: arg.user, currId: arg.currUserId }))
    } catch (e) {
      thunkAPI.dispatch(setError({ error: 'user not updated' }))
    }
    thunkAPI.dispatch(setLoading({ value: false }))
  }
)


interface usersTableStateType {
  usersList: UserType[]
  currentUserId: string
  error: string
  modalWindows: {
    createMW: boolean
    updateMW: boolean
    deleteMW: boolean
  }
}

const initialState: usersTableStateType = {
  usersList: [],
  currentUserId: '',
  error: '',
  modalWindows: {
    createMW: false,
    updateMW: false,
    deleteMW: false,
  }
}


const usersTableSlice = createSlice(
  {
    name: 'usersTable',
    initialState,
    reducers: {
      setUsers (state, action: PayloadAction<{ users: UserType[] }>) {
        state.usersList = action.payload.users
      },
      deleteUser (state, action: PayloadAction<{ userId: string }>) {
        state.usersList = state.usersList.filter(u => u.id !== action.payload.userId)
      },
      updateUser (state, action: PayloadAction<{ user: Partial<UserType>, currId: string }>) {
        state.usersList.forEach((u: UserType, i) => {
          if (u.id === action.payload.currId) {
            state.usersList[i] = { ...state.usersList[i], ...action.payload.user }
          }
        })
      },
      setCurrentUserId (state, action: PayloadAction<{ id: string }>) {
        state.currentUserId = action.payload.id
      },
      setError (state, action: PayloadAction<{ error: string }>) {
        state.error = action.payload.error
      },
      setModalWindow (state, action: PayloadAction<{modalWindow: keyof typeof state.modalWindows, value: boolean}>){
        state.modalWindows[action.payload.modalWindow] = action.payload.value
      }
    }
  }
)

export const {
  setUsers,
  deleteUser,
  updateUser,
  setCurrentUserId,
  setModalWindow,
  setError
} = usersTableSlice.actions

export default usersTableSlice.reducer