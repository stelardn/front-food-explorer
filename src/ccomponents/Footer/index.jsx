import { Container } from "./styles";

import { Logo } from '../Logo';
import { TextButton } from '../TextButton';
import { LinkButton } from '../LinkButton';

import { FiLogOut, FiSearch } from 'react-icons/fi'
import { TfiReceipt } from 'react-icons/tfi'
import { RiHeartsLine } from 'react-icons/ri';

export function Footer() {
    return (
        <Container>
            <Logo />
            <p>&copy; 2022 Todos os direitos reservados.</p>
        </Container>
    )
}