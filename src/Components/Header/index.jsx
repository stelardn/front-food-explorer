import { Container } from "./styles";

import { Logo } from '../Logo';
import { TextButton } from '../TextButton';
import { LinkButton } from '../LinkButton';

import { FiLogOut, FiSearch } from 'react-icons/fi'
import { TfiReceipt } from 'react-icons/tfi'

export function Header() {
    return (
        <Container>
            <Logo />
            <LinkButton content='Meus favoritos' />
            <div className="input-wrapper">
                <FiSearch />
                <input placeholder="Busque pelas opções de pratos" />
            </div>
            <TextButton icon={TfiReceipt} content='Meu pedido (0)' />
            <FiLogOut />
        </Container>
    )
}