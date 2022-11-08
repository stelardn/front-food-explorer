import { Container, ContainerRight, ContainerLeft } from "./styles";
import { Input } from '../../Components/Input';
import { TextButton } from '../../Components/TextButton';
import { LinkButton } from '../../Components/LinkButton';
import { Logo } from "../../Components/Logo";

export function SignUp() {
    return (
        <Container>
            <ContainerLeft className='mobile-hidden'>
                <Logo />
            </ContainerLeft>
            <ContainerRight className='container-right'>
                <h1>Crie sua conta</h1>
                <Input
                    label='Seu nome'
                    placeholder='Exemplo: Maria da Silva'
                />
                <Input
                    label='Email'
                    placeholder='Exemplo: exemplo@exemplo.com'
                />
                <Input
                    label='Senha'
                    placeholder='No mínimo 6 caracteres'
                />
                <TextButton
                    content='Criar conta'
                />
                <LinkButton
                    content='Já tenho uma conta'
                />
            </ContainerRight>
        </Container>
    )
}