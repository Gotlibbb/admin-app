import React from 'react'
import { InputBlockStyled, InputStyled, TitleStyled } from './InputStyled'

interface InputComponentPropsType {
  title: string
  placeHolder: string
  valueInput: string
  setValueInput: (v: string) => void
}

export const InputComponent = React.memo((props: InputComponentPropsType) => {
  const { title, placeHolder, valueInput, setValueInput } = { ...props }
  return (
    <InputBlockStyled>

      <TitleStyled>{title}</TitleStyled>

      <InputStyled type={'text'}
                   placeholder={placeHolder}
                   value={valueInput}
                   onChange={(e) => setValueInput(e.currentTarget.value)}/>

    </InputBlockStyled>
  )

})
