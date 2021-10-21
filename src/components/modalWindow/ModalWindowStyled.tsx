import styled from 'styled-components'

export const ModalContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);

`

export const ModalWindowStyled = styled.div`
  background: white;
  border-radius: 10px;
  width: 608px;
  animation: show-modal 0.3s forwards;
  @keyframes show-modal {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const MWHeadStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 56px;
  background: #353D4B;
  border-radius: 10px 10px 0 0;
`

export const OutStyled = styled.span`
  text-align: right;
  color: #B8C1CC;
  font-size: 15px;
  flex: 1;
  padding-top: 2px;
  padding-right: 24px;

  span {
    cursor: pointer;
  }
`

export const MWTitleStyled = styled.span`
  position: absolute;
  text-align: center;
`

export const MWFooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  height: 60px;
  background: #F6F7F9;
  border-radius: 0 0 10px 10px;
  padding-right: 24px;
`

export const MWDeleteStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 168px;
  font-size: 16px;
`

export const InputsBlockStyled = styled.div`
  margin-bottom: 56px;
`