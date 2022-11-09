import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 90%;
  height: 4.7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    cursor: pointer;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 4.7rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const BuscarInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 17.5rem;
  height: 3rem;

  background-color: #2D2D37;
  border-radius: .8rem;
  padding: .2rem .5rem;
  margin-inline: 1.2rem;
`

export const Menu = styled.a`
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: #FFFF;
  margin-right: 1.2rem;
  text-decoration: none;

  &:hover{
    cursor: pointer;
  }
`

export const MenuRight = styled.a`
  font-size: 1.2rem;
  line-height: 2.5rem;
  color: #FFFF;
  margin-right: 1.2rem;
  text-decoration: none;

  &:hover{
    cursor: pointer;
  }
`

export const UserPicture = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 2.2rem;
  border: 3px solid #ffff;
`

export const Input = styled.input`
  background-color: transparent;
  flex: 1;
  border: 0;
  outline: none;
  color: #ffffff;
`
