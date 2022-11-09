import styled from 'styled-components'
import { IColumn } from './types'

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 12rem;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.7rem;

  margin-bottom: 2.3rem;
  line-height: 2.4rem;
  
  color: #ffff;
`

export const TitleHighLight = styled.h3`
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.5rem;
  color: #FFFFFF70;
  margin-bottom: 2.4rem;
`

export const Column = styled.div<IColumn>`
 flex: ${function({flex}){return flex}};
 display: flex;
 flex-direction: column;
 align-self: ${function({align}){return align}};
 padding-right: 2.4rem;
`