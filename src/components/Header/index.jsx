import { Container, ContainerMobile, ContainerDesktop } from "./styles";

import { Logo } from '../Logo';
import { TextButton } from '../TextButton';
import { LinkButton } from '../LinkButton';

import { FiLogOut, FiSearch } from 'react-icons/fi'
import { TfiReceipt } from 'react-icons/tfi';
import { RiHeartsLine } from 'react-icons/ri';

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const { signOff, user } = useAuth();

    const navigate = useNavigate();

    const [search, setSearch] = useState();

    function handleSignOff() {
        signOff();
        navigate('/');
    }

    function handleSearch() {
        navigate(`/meals/search?filter=${search}`);
    }

    return (
        <Container>
            <ContainerMobile className="mobile">
                <button className="logo-btn" onClick={() => navigate('/')}>
                    <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/orders')}>
                        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C" />
                    </svg>
                </button>
                <div className="input-wrapper">
                    <FiSearch onClick={handleSearch} />
                    <input
                        placeholder="Buscar"
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                handleSearch()
                            }
                        }}
                    />
                </div>
                <RiHeartsLine onClick={() => navigate('/meals/favorites')} />
                <TextButton onClick={() => navigate('/orders')} icon={TfiReceipt} />
                <FiLogOut onClick={handleSignOff} />
            </ContainerMobile>
            <ContainerDesktop className="mobile-hidden">
                <Logo onClick={() => navigate('/')} />
                <LinkButton onClick={() => navigate('/meals/favorites')} content='Meus favoritos' />
                <div className="input-wrapper">
                    <FiSearch
                        onClick={handleSearch}
                    />
                    <input
                        placeholder="Busque pelas opções de pratos"
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                handleSearch()
                            }
                        }}
                    />
                </div>
                <TextButton icon={TfiReceipt} content='Meus pedidos' onClick={() => navigate('/orders')} />
                <FiLogOut onClick={handleSignOff} />
            </ContainerDesktop>
        </Container>
    )
}