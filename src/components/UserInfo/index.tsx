import { Container, UserPicture, NameText, Progress } from "./styled";
import { IUserInfo } from "./types";

export function UserInfo({ nome, image, percentual }: IUserInfo) {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
}
