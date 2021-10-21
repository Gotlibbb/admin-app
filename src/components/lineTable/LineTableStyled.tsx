import styled, { css } from 'styled-components'

export const LineTableStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  background: #ffffff;
  height: 48px;
  margin: 0 32px 4px 32px;
  padding: 0 32px 0 32px;
  ${(props: { itsHeader?: boolean }) => props.itsHeader && css`font-weight: 600;`}
`

export const CellTableStyled = styled.span`
  width: 100px;
`

export const ButtonBlockStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
`
