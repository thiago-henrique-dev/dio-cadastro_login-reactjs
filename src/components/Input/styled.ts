import styled from "styled-components";

export const InputContainer  = styled.div`
  width: 100%;
  max-width: 27.5rem;
  height: 3rem;
  

  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

export const IconContainer = styled.div`
  margin-right: 1rem;
  color: #E23DD7;
  font-size: 2rem;
`

export const InputText = styled.input`
  background: transparent;
  color: #FFFFFF;
  border: 0;
  border-bottom: 1px solid #444444;
  outline: none;
  height: 3rem;
  width: 100%;

  transition: ease-in .5s;

  &:focus{
    border-bottom: 1px solid crimson;
  }

`

export const ErrorText = styled.p`
  color: #FF0000;
  font-size:  1.2rem;
  margin: .5rem 0 ;
`