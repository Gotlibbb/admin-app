import React from 'react'
import ButtonComponent from '../ButtonComponent'
import add from '../../../icons/add.png'

export const ShowAddMWBtn = React.memo((props: { showModal: (v: boolean) => void }) => {
  const onClickHandler = () => {
    props.showModal(true)
  }

  return (
    <ButtonComponent
      onClickEvent={onClickHandler}
      icon={add}
      typeButton={'primary'}
      text={'Добавить'}
    />
  )
})
