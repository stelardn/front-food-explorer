import { Container, ContainerForm, ContainerLogo } from "./styles";
import { Input } from "../../Components/Input";
import { TextButton } from "../../Components/TextButton";
import { LinkButton } from "../../Components/LinkButton";
import { Logo } from "../../Components/Logo";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signIn } = useAuth();

  function handleSignIn() {
    if (email === "" || password === "") {
      return alert("Preencha todos os campos para continuar.");
    }

    signIn(email, password);
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <ContainerForm>
        <h1>Faça login</h1>
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
        <TextButton content="Entrar" onClick={handleSignIn} />
        <LinkButton
          content="Criar uma conta"
          onClick={() => navigate("/register")}
        />
      </ContainerForm>
    </Container>
  );
}
