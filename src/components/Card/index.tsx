import { FiThumbsUp } from "react-icons/fi";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styled";

export function Card() {
  return (
    <CardContainer>
      <ImageBackground  src="https://ecommercenapratica.com/wp-content/uploads/2020/01/Tamanho-da-Imagem-para-Instagram-e-Facebook-capa-1200x385.png.webp"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/92181823?v=4" />
          <div>
            <h4>Hamiceis Pereira</h4>
            <p>Há 9 minutos</p>
          </div>
        </UserInfo>

        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito o curso de html e css no bootcamp dio Orange Tech...{" "}
            <strong>Saiba mais...</strong>
          </p>
        </PostInfo>

        <HasInfo>
          <h4>#HTML #CSS #JS</h4>
          <p>
            <FiThumbsUp /> 14
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}
