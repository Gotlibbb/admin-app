import React from 'react'
import { ModalWindowComponent } from '../ModalWindowComponent'
import { UserType } from '../../../api/api'
import { useAppDispatch, useAppSelector } from '../../../helpers/hooks'
import { setModalWindow } from '../../../store/usersTableSlice'

interface ModalWindowDeletePropsType {
  users: UserType[]
  deleteUserHandler: (id: string) => void
}

const ModalWindowDelete = (props: ModalWindowDeletePropsType) => {

  const dispatch = useAppDispatch()
  const modalWindows = useAppSelector(s => s.usersTableReducer.modalWindows)

  const setDeleteModalActive = (value: boolean) => {
    dispatch(setModalWindow({ modalWindow: 'deleteMW', value }))
  }

  const { users, deleteUserHandler } = { ...props }

  return (
    <ModalWindowComponent
      deleteModalActive={modalWindows.deleteMW}
      users={users}
      closeModal={setDeleteModalActive}
      deleteUserHandler={deleteUserHandler}
    />
  )
}

export default React.memo(ModalWindowDelete)