import React from 'react'
import { ButtonStyled, ImgStyled } from './ButtonStyled'

export type ButtonType = 'icon' | 'primary' | 'basic'

interface ButtonComponentPropsType {
  typeButton: ButtonType
  onClickEvent: () => void
  icon?: any
  disabled?: boolean
  create?: boolean
  text?: string
}

const ButtonComponent = (props: ButtonComponentPropsType) => {
  return (
    <ButtonStyled typeButton={props.typeButton}
                  create={props.create}
                  onClick={props.onClickEvent}
                  disabled={props.disabled}>

      {props.create || <ImgStyled typeButton={props.typeButton} src={props.icon} alt='icon'/>}
      {props?.text}
    </ButtonStyled>
  )
}

export default ButtonComponent
