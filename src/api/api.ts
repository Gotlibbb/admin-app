import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: {}
})

export interface AuthResponseType {
  login: string
  password: string
}

export interface UserType {
  sername: string
  name: string
  fatherName: string
  email: string
  login: string
  id: string
}

export interface UserTypeCreate {
  sername: string
  name: string
  fatherName: string
  email: string
  login: string
}

export interface UsersResponseType {
  users: UserType[]
}

export const authAPI = {
  getLoginWithPassword () {
    return instance.get<AuthResponseType>(`auth/`).then(res => res.data)
  },
}

export const usersApi = {
  setUsers () {
    return instance.get<UserType[]>(`users/`).then(res => res.data)
  },
  deleteUser (id: string) {
    return instance.delete(`users/${id}`)
  },
  postUser (user: UserTypeCreate) {
    return instance.post(`users/`, { ...user })
  },
  updateUser (id: string, updUser: Partial<UserType>) {
    return instance.patch(`users/${id}`, { ...updUser })
  }
}

