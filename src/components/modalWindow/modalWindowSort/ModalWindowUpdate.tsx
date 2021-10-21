import { UserType } from '../../../api/api'
import { ModalWindowComponent } from '../ModalWindowComponent'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../helpers/hooks'
import { setModalWindow } from '../../../store/usersTableSlice'

interface ModalWindowUpdatePropsType {
  users: UserType[]
  updateUserHandler: (u: Partial<UserType>, currentUserId: string) => void
}

const ModalWindowUpdate = (props: ModalWindowUpdatePropsType) => {
  const dispatch = useAppDispatch()
  const modalWindows = useAppSelector(s => s.usersTableReducer.modalWindows)

  const setUpdateModalActive = (value: boolean) => {
    dispatch(setModalWindow({ modalWindow: 'updateMW', value }))
  }

  const { users, updateUserHandler } = { ...props }

  return (
    <ModalWindowComponent
      updateModalActive={modalWindows.updateMW}
      users={users}
      closeModal={setUpdateModalActive}
      updateUserHandler={updateUserHandler}
    />
  )
}

export default React.memo(ModalWindowUpdate)