import React, { ChangeEvent, useState } from 'react'
import { UserType } from '../../api/api'
import { AddUsersBlockStyled, TableContainerStyled } from './UsersTableStyled'
import { ShowAddMWBtn } from '../../components/button/buttonSort/ShowAddMWBtn'
import LineHeader from '../../components/lineTable/lineSort/LineHeader'
import LineRow from '../../components/lineTable/lineSort/LineRows'

interface UsersTablePropsType {
  users: UserType[]
  setUpdateModalActive: (v: boolean) => void
  setCreateModalActive: (v: boolean) => void
  setDeleteModalActive: (v: boolean) => void
  setCurrentUserId: (id: string) => void
}

export const UsersTable = React.memo((props: UsersTablePropsType) => {

  const {
    users,
    setUpdateModalActive,
    setCreateModalActive,
    setDeleteModalActive,
    setCurrentUserId,
  } = { ...props }

  const [searchValue, setSearchValue] = useState<string>('')

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase())
  }

  return (
    <TableContainerStyled>
      <AddUsersBlockStyled>
        <span>Пользователи</span>
        <div>
          <input type='text'
                 placeholder='Поиск по имени'
                 onChange={onChangeSearchInput}
                 value={searchValue}/>
        </div>
        <ShowAddMWBtn showModal={setCreateModalActive}/>
      </AddUsersBlockStyled>
      <LineHeader/>

      {
        users.filter(((u: UserType) => u.name.toLowerCase().includes(searchValue)))
        .map((u) => (
          <LineRow
            user={u}
            setUpdateModalActive={setUpdateModalActive}
            setDeleteModalActive={setDeleteModalActive}
            setCurrentUserId={setCurrentUserId}
            key={u.id}
          />
        ))
      }
    </TableContainerStyled>
  )

})