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


export const ModalWindowComponent =
  React.memo((props: ModalWindowComponentPropsType) => {

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
            {/*Выбор тайтла для модального окна*/}
            {createModalActive && <MWTitleStyled>Создание пользователя</MWTitleStyled>}
            {updateModalActive && <MWTitleStyled>Редактирование пользователя</MWTitleStyled>}
            {deleteModalActive && <MWTitleStyled>Удаление пользователя</MWTitleStyled>}

            <OutStyled><span onClick={() => closeModal(false)}>⨉</span></OutStyled>
          </MWHeadStyled>

          {/*Инпуты для обновления контакта*/}
          {(createModalActive || updateModalActive) &&
          <InputsBlockStyled>
            <InputComponent title={'Фамилия'}
                            placeHolder={'Введите фамилию'}
                            valueInput={newSerName}
                            setValueInput={setNewSerName}/>

            <InputComponent title={'Имя'}
                            placeHolder={'Введите имя'}
                            valueInput={newName}
                            setValueInput={setNewName}/>

            <InputComponent title={'Отчество'}
                            placeHolder={'Введите отчество'}
                            valueInput={newFatherName}
                            setValueInput={setNewFatherName}/>

            <InputComponent title={'E-mail'}
                            placeHolder={'Введите электронную почту'}
                            valueInput={newEmail}
                            setValueInput={setNewEmail}/>

            <InputComponent title={'Логин'}
                            placeHolder={'Введите логин'}
                            valueInput={newLogin}
                            setValueInput={setNewLogin}/>
          </InputsBlockStyled>
          }
          {/*другое модальное окно с удалением*/}
          {deleteModalActive && <MWDeleteStyled>Удалить выбранного пользователя?</MWDeleteStyled>}

          <MWFooterStyled>
            {createModalActive &&
            <ButtonComponent create={true}
                             disabled={checkInput}
                             typeButton={'primary'}
                             onClickEvent={() => createUser(newUser)}
                             text={'Создать'}/>
            }

            {updateModalActive &&
            <ButtonComponent create={true}
                             disabled={checkInput}
                             typeButton={'primary'}
                             onClickEvent={() => currentUserId && updateUser(upUser, currentUserId)}
                             text={'Редактировать'}/>
            }

            {deleteModalActive &&
            <ButtonComponent create={true}
                             typeButton={'basic'}
                             onClickEvent={() => closeModal(false)}
                             text={'Отменить'}/>
            }

            {deleteModalActive &&
            <ButtonComponent create={true}
                             typeButton={'primary'}
                             onClickEvent={deleteUser}
                             text={'Удалить'}/>
            }

          </MWFooterStyled>
        </ModalWindowStyled>
      </ModalContainerStyled>
    )
  })