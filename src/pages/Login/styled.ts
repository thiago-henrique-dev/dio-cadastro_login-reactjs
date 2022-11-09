import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Wrapper = styled.div`
  max-width: 30rem;
`


export const Column = styled.div`
  display: flex;
  flex-grow: 1;
` 

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
` 

export const Title = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  width: 50rem;

  margin-bottom: 2rem;
  line-height: 4.4rem;
  
  color: #ffff;
`

export const TitleLogin = styled.p`
  font-weight: 700;
  font-size: 3rem;
  
  margin-bottom: 2rem;
  line-height: 4.4rem;
  
`

export const SubtitleLogin = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 3.5rem;
  line-height: 2.5rem;
  

`

export const ForgotPass = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.9rem;
  
  color: #E5E044;

  &:hover {
    opacity: .6;
    cursor: pointer;
  }
`
export const CreateAccount = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.9rem;
  
  color: #E23DD7;

  &:hover {
    opacity: .6;
    cursor: pointer;
  }
  
`



