import 'typeface-roboto'
import './App.css'
import React from 'react'
import { UsersTableContainer } from '../usersTable/UsersTableContainer'
import { Header } from './HeaderBlock'
import { SideBar } from './SideBarBLock'
import { AppBlock, ContentBlock, FlexBlock } from './AppStyled'
import LoginPage from '../login/LoginPage'


export const App = React.memo(() => {
  return (
    <AppBlock>
      <Header/>
      <FlexBlock>
        <SideBar/>
        <ContentBlock>
          <UsersTableContainer/>
          <LoginPage/>
        </ContentBlock>
      </FlexBlock>
    </AppBlock>
  )
})
