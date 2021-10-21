import { UserType, UserTypeCreate } from '../../../api/api'
import { ModalWindowComponent } from '../ModalWindowComponent'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../helpers/hooks'
import { setModalWindow } from '../../../store/usersTableSlice'

interface ModalWindowUpdatePropsType {
  users: UserType[]
  addUserHandler: (u: UserTypeCreate) => void
}

const ModalWindowCreate = (props: ModalWindowUpdatePropsType) => {
  const dispatch = useAppDispatch()
  const modalWindows = useAppSelector(s => s.usersTableReducer.modalWindows)

  const setCreateModalActive = (value: boolean) => {
    dispatch(setModalWindow({ modalWindow: 'createMW', value }))
  }
  const { users, addUserHandler } = { ...props }

  return (
    <ModalWindowComponent
      createModalActive={modalWindows.createMW}
      users={users}
      closeModal={setCreateModalActive}
      addUserHandler={addUserHandler}
    />
  )
}

export default React.memo(ModalWindowCreate)