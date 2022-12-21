import { Container, ContainerMobile, ContainerDesktop } from "./styles";

import { Logo } from '../Logo';
import { TextButton } from '../TextButton';
import { LinkButton } from '../LinkButton';

import { FiLogOut, FiSearch } from 'react-icons/fi'
import { TfiReceipt } from 'react-icons/tfi';
import { RiHeartsLine } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function HeaderAdm() {

    const { signOff, user } = useAuth();

    const navigate = useNavigate();

    function handleSignOff() {
        signOff();
        navigate('/');
    }

    return (
        <Container>
            <ContainerMobile className="mobile">
                <div className="logo-btn" onClick={() => navigate('/')}>
                    <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/orders')}>
                        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C" />
                    </svg>
                </div>
                {/* <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C" />
                </svg> */}
                <span>Administrador</span>
                <TextButton icon={TfiReceipt} />
                <FiLogOut />
            </ContainerMobile>
            <ContainerDesktop className="mobile-hidden">
                <header>
                    <Logo onClick={() => navigate('/')} />
                    <div id="right">
                        <span>Administrador</span>
                        <TextButton icon={TfiReceipt} content='Pedidos' onClick={() => navigate('/orders')} />
                        <FiLogOut onClick={handleSignOff} />
                    </div>
                </header>
            </ContainerDesktop>
        </Container>
    )
}