import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../helpers/hooks'
import { loginTC, setError } from '../../store/loginPageSlice'
import { ErrorStyled, InputBlockStyled, LoginBlockStyled } from './LoginPageStyled'


const LoginPage = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()
  const authorized = useAppSelector(s => s.loginPageReducer.isAuthorized)
  const error = useAppSelector(s => s.loginPageReducer.error)

  const chekData = (login: string, password: string) => {
    dispatch(loginTC({ login: login.replace(/\s/g, ''), password: password.replace(/\s/g, '') }))
    dispatch(setError({ error: '' }))
    setPassword('')
    setLogin('')
  }

  if (authorized === 'true') {
    return null
  }

  return (
    <LoginBlockStyled>
      <h1>
        Добро пожаловать
      </h1>
      <ErrorStyled>
        {error !== '' && error}
      </ErrorStyled>
      <InputBlockStyled>
        <input type='text'
               onClick={() => dispatch(setError({ error: '' }))}
               placeholder='Логин'
               value={login}
               onChange={e => setLogin(e.target.value)}/>
        <input type='password'
               placeholder='Пароль'
               value={password}
               onClick={() => dispatch(setError({ error: '' }))}
               onChange={e => setPassword(e.target.value)}/>
        <button onClick={() => chekData(login, password)}>
          Войти
        </button>
      </InputBlockStyled>
      <div>
        <div>
          Логин: testLogin
        </div>
        <div>
          Пароль: test123
        </div>
      </div>
    </LoginBlockStyled>
  )
}

export default React.memo(LoginPage)