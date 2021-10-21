import styled from 'styled-components'

export const InputBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 64px 0;
`
export const TitleStyled = styled.span`
  color: #818C99;
  padding-bottom: 4px;
  font-size: 14px;
  letter-spacing: 0.02em;
  font-weight: 600;
`
export const InputStyled = styled.input`
  ::placeholder {
    color: #818C99;
    opacity: 0.6;
  }

  font-size: 14px;
  border-radius: 6px;
  outline: none;
  background: #F9FAFC;
  border: 2px solid #EBECEF;
  padding: 8px 12px;
`
