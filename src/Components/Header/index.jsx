import { Container, ContainerMobile, ContainerDesktop } from "./styles";

import { Logo } from '../Logo';
import { TextButton } from '../TextButton';
import { LinkButton } from '../LinkButton';

import { FiLogOut, FiSearch } from 'react-icons/fi'
import { TfiReceipt } from 'react-icons/tfi'
import { RiHeartsLine } from 'react-icons/ri';

export function Header() {
    return (
        <Container>
            <ContainerMobile className="mobile">
                <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C" />
                </svg>
                <div className="input-wrapper">
                    <FiSearch />
                    <input placeholder="Buscar" />
                </div>
                <RiHeartsLine />
                <TextButton icon={TfiReceipt} />
                <FiLogOut />
            </ContainerMobile>
            <ContainerDesktop className="mobile-hidden">
                <Logo />
                <LinkButton content='Meus favoritos' />
                <div className="input-wrapper">
                    <FiSearch />
                    <input placeholder="Busque pelas opções de pratos" />
                </div>
                <TextButton icon={TfiReceipt} content='Meu pedido (0)' />
                <FiLogOut />
            </ContainerDesktop>
        </Container>
    )
}