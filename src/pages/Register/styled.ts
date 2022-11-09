import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 8.8rem;

  display: flex;
  justify-content: space-between;


  gap: 30rem;
`

export const Wrapper = styled.div`
  max-width: 29.7rem;
`

export const Column = styled.div`
  display: flex;
  flex: 1;
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
  font-size: 3.2rem;
  line-height: 4.4rem;

  color: #ffffff;
`

export const TitleRegister = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.4rem;

  margin-bottom: .8rem;

  color: #FFFF;
`

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.5rem;

  color: #FFFF;

  margin-bottom: 3.5rem;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.3rem;

  margin: 2.7rem 0 1.1rem 0;

  color: #FFFF;
`

export const Account = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.9rem;
  

  &:hover {
    opacity: .6;
    cursor: pointer;
  }
`

export const SpanText = styled.span`
  color: #23DD7A;
`