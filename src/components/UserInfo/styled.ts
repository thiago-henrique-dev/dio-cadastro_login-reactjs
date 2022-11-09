
import styled from "styled-components";
import { IProps } from "./types";

export const Container = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
`

export const UserPicture = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 2.2rem;
  border: .3rem solid #FFFF;
  margin-right: 1.2rem;
`

export const NameText = styled.div`
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.5rem;
  color: #FFFF;
`

export const Progress = styled.div<IProps>`
  width: 18rem;
  height: .6rem;
  background-color: #FFFF;
  border-radius: .3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${function({percentual}: any){return percentual}}%;
    height: .6rem;
    border-radius: .3rem;
    background-color: #23DD7A;
  }
`