import styled from "styled-components"

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3B4651;
  position: relative;
  margin-bottom: 2.4rem;
`

export const ImageBackground = styled.img`
  width: 100%;
  height: 18rem;
  background-size: cover;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;

`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.2rem;

  div {
    margin-left: 1.2rem;
  }

  h4 {
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2.5rem;
    color: #FFFF;
  }

  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`

export const UserPicture = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 2.2rem;
  border: 1px solid #FFFF;
`
export const PostInfo = styled.div`
  margin-bottom: 1.2rem;

  h4 {
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2.5rem;
    color: #FFFF;
  }

  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`

export const HasInfo = styled.div`
  margin-top: 1.2rem;

  h4 {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #FFFFFF80;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.2rem;
  }
`

