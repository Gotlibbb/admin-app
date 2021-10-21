import styled from 'styled-components'

export const LoginBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  align-items: center;
  h1{
    margin: 0;
  }
  
`
export const InputBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  input {
    font-size: 1.3rem;
    margin-bottom: 10px;
    outline: none;
    border-radius: 0.3em;
    padding: 0 5px;
  }

  button:hover {
    background-color: rgba(204, 204, 204, 0.91);
    cursor: pointer;
  }

  button {
    width: 50%;
    font-size: 1.3rem;
    border-radius: 0.3em;
  }
`
export const ErrorStyled = styled.div`
  height: 8px;
  color: tomato;
`
