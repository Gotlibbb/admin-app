import React from 'react'
import ButtonComponent from '../ButtonComponent'
import pencil from '../../../icons/pencil.png'

interface ShowUpdateMWBtnPropsType {
  showModal: (v: boolean) => void
  setCurrentUserId: (id: string) => void
  userId: string
}

export const ShowUpdateMWBtn = React.memo((props: ShowUpdateMWBtnPropsType) => {
  const { showModal, setCurrentUserId, userId } = { ...props }
  const onClickHandler = () => {
    showModal(true)
    setCurrentUserId(userId)
  }

  return (
    <ButtonComponent
      onClickEvent={onClickHandler}
      icon={pencil}
      typeButton={'icon'}
    />
  )
})
