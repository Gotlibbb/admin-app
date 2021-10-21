import styled, { css } from 'styled-components'
import { ButtonType } from './ButtonComponent'

export const ButtonStyled = styled.button`
  transition: 0.1s box-shadow;
  &:active {
    box-shadow: inset 2px 1px 3px 1px rgba(0, 0, 0, 0.1);
  }
  color: white;
  outline: none;
  cursor: pointer;
  ${(props: { disabled?: boolean, create?: boolean, typeButton: ButtonType }) => {
    if (props.disabled) {
      return (
              css`
                opacity: 0.7;
                cursor: unset`
      )
    }
    if (props.typeButton === 'icon') {
      return (
              css`background: #F6F7F9;
                height: 32px;
                width: 32px;
                padding-right: 25px;`
      )
    }
    if (props.typeButton === 'primary') {
      return (
              css`background: #4587ED;
                padding: 8px 32px 8px 32px;`
      )
    }
    if (props.typeButton === 'basic') {
      return (
              css`background: #E4E5E8;
                color: #6D7885;
                padding: 8px 32px 8px 32px;
                margin-right: 24px;`
      )
    }
    if (props.create) {
      return css`width: 153px`
    }
  }}
  border-radius: 6px;
  border: 0 solid #b8c1cc;
  font-size: 14px;
  letter-spacing: 0.03em;

`

export const ImgStyled = styled.img`
  ${(props: { typeButton: ButtonType }) => {
    if (props.typeButton === 'primary') {
      return (
              css`width: 13px;
                padding-right: 5px; `
      )
    }
    if (props.typeButton === 'icon') {
      return (
              css`width: 20px;
                padding-top: 3px;`
      )
    }
  }}
`
