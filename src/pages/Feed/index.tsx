import { Column, Container, TitleHighLight, Title } from './styled'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
 

export function Feed() {
  return (
    <>
      <Header authentication={true} />
      <Container>
        <Column<any> flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1} align="flex-start">
          <TitleHighLight>#RANKING TOP 5 DA SEMANA</TitleHighLight>
          <UserInfo
            percentual="50"
            nome="Hamiceis"
            image="https://avatars.githubusercontent.com/u/92181823?v=4"
          />

          <UserInfo
            percentual="70"
            nome="Hamiceis"
            image="https://avatars.githubusercontent.com/u/92181823?v=4"
          />

          <UserInfo
            percentual="30"
            nome="Hamiceis"
            image="https://avatars.githubusercontent.com/u/92181823?v=4"
          />

          <UserInfo
            percentual="40"
            nome="Hamiceis"
            image="https://avatars.githubusercontent.com/u/92181823?v=4"
          />

          <UserInfo
            percentual="100"
            nome="Hamiceis"
            image="https://avatars.githubusercontent.com/u/92181823?v=4"
          />
        </Column>
      </Container>
    </>
  )
}
