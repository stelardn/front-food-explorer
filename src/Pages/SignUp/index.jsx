import { Container, ContainerForm, ContainerLogo } from "./styles";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { LinkButton } from "../../components/LinkButton";
import { Logo } from "../../components/Logo";
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (email === "" || password === "" || name === "") {
      return alert("Preencha todos os campos para continuar.");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message);
        }

        alert(
          "Não foi possível completar o cadastro. Verifique os dados e tente novamente."
        );
      });
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <ContainerForm>
        <h1>Crie sua conta</h1>
        <Input
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextButton content="Criar conta" onClick={handleSignUp} />
        <LinkButton
          content="Já tenho uma conta"
          onClick={() => navigate("/")}
        />
      </ContainerForm>
    </Container>
  );
}
