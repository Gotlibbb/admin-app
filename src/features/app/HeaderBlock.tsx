import styled from 'styled-components'
import React from 'react'
import ButtonComponent from '../../components/button/ButtonComponent'
import { useAppDispatch, useAppSelector } from '../../helpers/hooks'
import { logoutTC } from '../../store/loginPageSlice'
import Loader from '../../components/modalWindow/Loading'

let HeaderBlock = styled.div`
    height: 56px;
    background: #353d4b;
    display: flex;
    align-items: center;
    padding-right: 11px;
    justify-content: flex-end;
`

export const Header = React.memo(() => {
    const authorized = useAppSelector(s => s.loginPageReducer.isAuthorized)
    const loading = useAppSelector(s => s.loginPageReducer.loading)

    const dispatch = useAppDispatch()
    const logout = () => {
        dispatch(logoutTC())
    }
    return <HeaderBlock>
        {loading && <Loader/>}

        {authorized === 'true' &&
        <ButtonComponent typeButton={'basic'}
                         text={'Выйти'}
                         create={true}
                         onClickEvent={logout}/>
        }

    </HeaderBlock>
})
