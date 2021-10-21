import React from 'react'
import { UserType } from '../../api/api'
import { ButtonBlockStyled, CellTableStyled, LineTableStyled } from './LineTableStyled'
import { ShowUpdateMWBtn } from '../button/buttonSort/ShowUpdateMWBtn'
import { ShowDeleteMWBtn } from '../button/buttonSort/ShowDeleteMWBtn'

interface LineTableComponentPropsType {
  user?: UserType
  itsHeader?: boolean
  setUpdateModalActive?: (v: boolean) => void
  setDeleteModalActive?: (v: boolean) => void
  setCurrentUserId?: (id: string) => void
}

export const LineTableComponent = React.memo((props: LineTableComponentPropsType) => {

  const {
    user,
    itsHeader,
    setUpdateModalActive,
    setDeleteModalActive,
    setCurrentUserId
  } = { ...props }

  return (
    <LineTableStyled itsHeader={itsHeader}>
      <CellTableStyled>{!itsHeader ? user?.sername : 'Фамилия'}</CellTableStyled>
      <CellTableStyled>{!itsHeader ? user?.name : 'Имя'}</CellTableStyled>
      <CellTableStyled>{!itsHeader ? user?.fatherName : 'Отчество'}</CellTableStyled>
      <CellTableStyled>{!itsHeader ? user?.email : 'E-mail'}</CellTableStyled>
      <CellTableStyled>{!itsHeader ? user?.login : 'Логин'}</CellTableStyled>

      {itsHeader && <CellTableStyled> </CellTableStyled>}
      {!itsHeader &&
      setUpdateModalActive &&
      setDeleteModalActive &&
      setCurrentUserId &&

      user && (
        <CellTableStyled>
          <ButtonBlockStyled>

            <ShowUpdateMWBtn showModal={setUpdateModalActive}
                             setCurrentUserId={setCurrentUserId}
                             userId={user.id}/>

            <ShowDeleteMWBtn showModal={setDeleteModalActive}
                             setCurrentUserId={setCurrentUserId}
                             userId={user.id}/>

          </ButtonBlockStyled>
        </CellTableStyled>
      )}
    </LineTableStyled>
  )
})