import { Button2 } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { MdEmail, MdLock } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { api } from "../../services/api";

import {
  Container,
  Title,
  Column,
  Wrapper,
  TitleLogin,
  SubtitleLogin,
  Row,
  ForgotPass,
  CreateAccount,
} from "./styled";
import { IFormData } from "./types";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Login obrigátorio")
      .email("Email não é válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(3, "Senha deve ter no mínimo 3 caracteres"),
  })
  .required();

export function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: IFormData)=> {
    try {
      const { data } = await api.get(`users`);
      const user = data.find((user: any) => user.email === formData.email);

      if (!user) {
        alert("Usuário e senha não encontrados");
        return;
      }
      const { email, password } = user;

      if (email !== formData.email || password !== formData.password) {
        alert("Email ou senha inválidos");
        return;
      }
      navigate("/feed");
    } catch {
      alert("Houve algum problema, tente novamente...");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            ecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça o seu cadastro</TitleLogin>
            <SubtitleLogin>Faça o seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                control={control}
                placeholder="email"
                leftIcon={<MdEmail />}
                errorMessage={errors.email?.message}
              />
              <Input
                name="password"
                control={control}
                placeholder="senha"
                type="password"
                leftIcon={<MdLock />}
                errorMessage={errors.password?.message}
              />
              <Button2 title="Entrar" type="submit" />
            </form>
            <Row>
              <ForgotPass>Esqueci minha senha</ForgotPass>
              <Link to="/register">
              <CreateAccount>Criar Conta!</CreateAccount>
              </Link>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
