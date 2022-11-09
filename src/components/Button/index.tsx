import { ButtonContainer, ContainerButton } from "./styled";
import IButton from "./types";

export function Button({title, ...rest}: IButton) {
  return (
    <ButtonContainer  {...rest}>
      {title}
    </ButtonContainer>
  )
}

export function Button2({title, ...rest}: IButton) {
  return (
    <ContainerButton  {...rest}>
      {title}
    </ContainerButton>

  )
}