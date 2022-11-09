import { Button2 } from "../../components/Button";
import img from "../../assets/background.svg";
import { Header } from "../../components/Header";
import { Container, Title, TitleHighLight, TextContent } from "./styled";

import { useNavigate } from 'react-router-dom'

export function Home() {

  const navigate = useNavigate()

  const handleClickSignin = () => {
    navigate('/login')
  }
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>

          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>

          <Button2 title="Começar agora" onClick={handleClickSignin} />
        </div>

        <div>
          <img src={img} alt="Imagem de fundo" />
        </div>
      </Container>
    </>
  );
}
