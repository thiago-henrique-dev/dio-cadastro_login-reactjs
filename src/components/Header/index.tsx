import { Link } from "react-router-dom";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture,
} from "./styled";
import { Button } from "../Button";
import Logo from "../../assets/logo-dio.png";
import { IHeader } from "./types";

export function Header({ authentication }: IHeader) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={Logo} alt="Logo da Dio" />
          </Link>
          {authentication && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>

              <Menu>Live code</Menu>
              <Menu>Global</Menu>
            </>
          )}
        </Row>

        <Row>
          {authentication ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/92181823?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Link to="/login">
                <Button title="Entrar" />
              </Link>

              <Link to="/register">
                <Button title="Cadastrar" />
              </Link>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
