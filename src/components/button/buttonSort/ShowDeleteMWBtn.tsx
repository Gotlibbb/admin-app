import React from 'react'
import ButtonComponent from '../ButtonComponent'
import trash from '../../../icons/trash.png'

interface ShowDeleteMWBtnPropsType {
  showModal: (v: boolean) => void
  setCurrentUserId: (id: string) => void
  userId: string
}

export const ShowDeleteMWBtn = React.memo((props: ShowDeleteMWBtnPropsType) => {
  const { showModal, userId, setCurrentUserId } = { ...props }
  const onClickHandler = () => {
    showModal(true)
    setCurrentUserId(userId)
  }
  return (
    <ButtonComponent
      onClickEvent={onClickHandler}
      icon={trash}
      typeButton={'icon'}
    />
  )
})