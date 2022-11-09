import { Container, ContainerForm, ContainerLogo } from "./styles";
import { Input } from '../../Components/Input';
import { TextButton } from '../../Components/TextButton';
import { LinkButton } from '../../Components/LinkButton';
import { Logo } from "../../Components/Logo";

export function SignIn() {
    return (
        <Container>
            <ContainerLogo>
                <Logo />
            </ContainerLogo>
            <ContainerForm>
                <h1>Faça login</h1>
                <Input
                    label='Email'
                    placeholder='Exemplo: exemplo@exemplo.com'
                />
                <Input
                    label='Senha'
                    placeholder='No mínimo 6 caracteres'
                    type='password'
                />
                <TextButton
                    content='Entrar'
                />
                <LinkButton
                    content='Criar uma conta'
                />
            </ContainerForm>
        </Container>
    )
}