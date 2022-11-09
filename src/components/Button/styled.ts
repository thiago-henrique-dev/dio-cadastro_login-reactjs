import styled from "styled-components"

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 2.2rem;
  position: relative;

  color: #FFFF;
  padding: 2px 1.2rem;
  min-width: 12rem;
  width: 100%;

  transition: all .3s;

  &:hover {
    opacity: .6;
    cursor: pointer;
  }
`

export const ContainerButton = styled.button`
  background: #E41050;
  border-radius: 2.2rem;
  position: relative;

  color: #ffff;
  padding: 2px 1.2rem;

  min-width: 16.7rem;
  width: 100%;
  height: 3.3rem;
  transition: all .3s;

  &:hover {
    opacity: .6;
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    border: 1px solid #E41050;
    top: -5px;
    left: -6px;
    width: calc(100% + 1rem);
    height: calc(100% + 1rem);
    border-radius: 2.2rem;
  }
`