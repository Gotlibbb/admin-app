import React, { useCallback, useEffect } from 'react'
import { UserType, UserTypeCreate } from '../../api/api'
import ModalWindowCreate from '../../components/modalWindow/modalWindowSort/ModalWindowCreate'
import ModalWindowUpdate from '../../components/modalWindow/modalWindowSort/ModalWindowUpdate'
import ModalWindowDelete from '../../components/modalWindow/modalWindowSort/ModalWindowDelete'
import { UsersTable } from './UsersTable'
import { useAppDispatch, useAppSelector } from '../../helpers/hooks'
import {
    createUserTC,
    deleteUserTC,
    getUsersTC,
    setCurrentUserId,
    setModalWindow,
    updateUserTC
} from '../../store/usersTableSlice'


export const UsersTableContainer = React.memo(() => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])

    const users = useAppSelector(s => s.usersTableReducer.usersList)
    const modalWindows = useAppSelector(s => s.usersTableReducer.modalWindows)
    const authorized = useAppSelector(s => s.loginPageReducer.isAuthorized)

    const addUserHandler = useCallback((newUser: UserTypeCreate) => {
        dispatch(createUserTC(newUser))
    }, [dispatch])

    const updateUserHandler = useCallback((upUserData: Partial<UserType>, currId: string) => {
        dispatch(updateUserTC({ user: upUserData, currUserId: currId }))
    }, [dispatch])

    const deleteUserHandler = useCallback((userId: string) => {
        dispatch(deleteUserTC(userId))
    }, [dispatch])

    const setUpdateMW = useCallback((value: boolean) => {
        dispatch(setModalWindow({ modalWindow: 'updateMW', value }))
    }, [dispatch])

    const setCreateMW = useCallback((value: boolean) => {
        dispatch(setModalWindow({ modalWindow: 'createMW', value }))
    }, [dispatch])

    const setDeleteMW = useCallback((value: boolean) => {
        dispatch(setModalWindow({ modalWindow: 'deleteMW', value }))
    }, [dispatch])

    const setCurrUserId = useCallback((id: string) => {
        dispatch(setCurrentUserId({ id }))
    }, [dispatch])

    if (authorized === 'false') {
        return null
    }

    return (
      <>
          {modalWindows.createMW &&
          <ModalWindowCreate users={users}
                             addUserHandler={addUserHandler}/>
          }

          {modalWindows.updateMW &&
          <ModalWindowUpdate users={users}
                             updateUserHandler={updateUserHandler}/>
          }

          {modalWindows.deleteMW &&
          <ModalWindowDelete users={users}
                             deleteUserHandler={deleteUserHandler}/>
          }

          <UsersTable users={users}
                      setUpdateModalActive={setUpdateMW}
                      setCreateModalActive={setCreateMW}
                      setDeleteModalActive={setDeleteMW}
                      setCurrentUserId={setCurrUserId}
          />
      </>
    )
})