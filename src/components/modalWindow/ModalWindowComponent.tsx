import {
  InputsBlockStyled,
  ModalContainerStyled,
  ModalWindowStyled,
  MWDeleteStyled,
  MWFooterStyled,
  MWHeadStyled,
  MWTitleStyled,
  OutStyled
} from './ModalWindowStyled'
import { InputComponent } from '../input/InputComponent'
import ButtonComponent from '../button/ButtonComponent'
import React, { useCallback, useState } from 'react'
import { UserType, UserTypeCreate } from '../../api/api'
import { useAppSelector } from '../../helpers/hooks'

interface ModalWindowComponentPropsType {
  users: UserType[]
  deleteModalActive?: boolean
  createModalActive?: boolean
  updateModalActive?: boolean
  closeModal: (v: boolean) => void
  addUserHandler?: (u: UserTypeCreate) => void
  updateUserHandler?: (u: Partial<UserType>, currentUserId: string) => void
  deleteUserHandler?: (id: string) => void
}


export const ModalWindowComponent = React.memo((props: ModalWindowComponentPropsType) => {
    const {
      users,
      deleteModalActive,
      createModalActive,
      updateModalActive,
      closeModal,
      addUserHandler,
      updateUserHandler,
      deleteUserHandler
    } = { ...props }

    const currentUserId = useAppSelector(s => s.usersTableReducer.currentUserId)

    let initInputValueHandler = (value: keyof typeof users[0]) => {
      if (updateModalActive) {
        let currentUser = users.filter((u: UserType) => u.id === currentUserId)[0]
        return currentUser[value]
      } else if (createModalActive) {
        return ''
      }
      return ''
    }

    let [newSerName, setNewSerName] = useState(initInputValueHandler('sername'))
    let [newName, setNewName] = useState(initInputValueHandler('name'))
    let [newFatherName, setNewFatherName] = useState(initInputValueHandler('fatherName'))
    let [newEmail, setNewEmail] = useState(initInputValueHandler('email'))
    let [newLogin, setNewLogin] = useState(initInputValueHandler('login'))

    let newUser: UserTypeCreate = {
      sername: newSerName,
      name: newName,
      fatherName: newFatherName,
      email: newEmail,
      login: newLogin,
    }
    let upUser: Partial<UserTypeCreate> = {
      sername: newSerName,
      name: newName,
      fatherName: newFatherName,
      email: newEmail,
      login: newLogin,
    }

    const createUser = useCallback((newUser: UserTypeCreate) => {
      closeModal(false)
      addUserHandler && addUserHandler(newUser)
    }, [closeModal, addUserHandler])

    const updateUser = useCallback((upUser: Partial<UserType>, currentUserId: string) => {
      closeModal(false)
      updateUserHandler && updateUserHandler(upUser, currentUserId)
    }, [closeModal, updateUserHandler])

    const deleteUser = useCallback(() => {
      closeModal(false)
      currentUserId && deleteUserHandler && deleteUserHandler(currentUserId)
    }, [currentUserId, deleteUserHandler, closeModal])

    const checkInput = !(newLogin && newEmail && newFatherName && newName && newSerName)

    return (
      <ModalContainerStyled>
        <ModalWindowStyled>
          <MWHeadStyled>
            {/*?????????? ???????????? ?????? ???????????????????? ????????*/}
            {createModalActive && <MWTitleStyled>???????????????? ????????????????????????</MWTitleStyled>}
            {updateModalActive && <MWTitleStyled>???????????????????????????? ????????????????????????</MWTitleStyled>}
            {deleteModalActive && <MWTitleStyled>???????????????? ????????????????????????</MWTitleStyled>}

            <OutStyled><span onClick={() => closeModal(false)}>???</span></OutStyled>
          </MWHeadStyled>

          {/*???????????? ?????? ???????????????????? ????????????????*/}
          {(createModalActive || updateModalActive) &&
          <InputsBlockStyled>
            <InputComponent title={'??????????????'}
                            placeHolder={'?????????????? ??????????????'}
                            valueInput={newSerName}
                            setValueInput={setNewSerName}/>

            <InputComponent title={'??????'}
                            placeHolder={'?????????????? ??????'}
                            valueInput={newName}
                            setValueInput={setNewName}/>

            <InputComponent title={'????????????????'}
                            placeHolder={'?????????????? ????????????????'}
                            valueInput={newFatherName}
                            setValueInput={setNewFatherName}/>

            <InputComponent title={'E-mail'}
                            placeHolder={'?????????????? ?????????????????????? ??????????'}
                            valueInput={newEmail}
                            setValueInput={setNewEmail}/>

            <InputComponent title={'??????????'}
                            placeHolder={'?????????????? ??????????'}
                            valueInput={newLogin}
                            setValueInput={setNewLogin}/>
          </InputsBlockStyled>
          }
          {/*???????????? ?????????????????? ???????? ?? ??????????????????*/}
          {deleteModalActive && <MWDeleteStyled>?????????????? ???????????????????? ?????????????????????????</MWDeleteStyled>}

          <MWFooterStyled>
            {createModalActive &&
            <ButtonComponent create={true}
                             disabled={checkInput}
                             typeButton={'primary'}
                             onClickEvent={() => createUser(newUser)}
                             text={'??????????????'}/>
            }

            {updateModalActive &&
            <ButtonComponent create={true}
                             disabled={checkInput}
                             typeButton={'primary'}
                             onClickEvent={() => currentUserId && updateUser(upUser, currentUserId)}
                             text={'??????????????????????????'}/>
            }

            {deleteModalActive &&
            <ButtonComponent create={true}
                             typeButton={'basic'}
                             onClickEvent={() => closeModal(false)}
                             text={'????????????????'}/>
            }

            {deleteModalActive &&
            <ButtonComponent create={true}
                             typeButton={'primary'}
                             onClickEvent={deleteUser}
                             text={'??????????????'}/>
            }

          </MWFooterStyled>
        </ModalWindowStyled>
      </ModalContainerStyled>
    )
  })