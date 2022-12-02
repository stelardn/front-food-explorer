import { Container } from "./styles";

import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CarouselComponent } from '../../components/CarouselComponent';

import banner from '../../assets/banner.png';

import { mockMeals } from '../../../mockData';

export function Favorites() {
    const [favorites, setFavorites] = useState(mockMeals);

    useEffect(() => {
        setFavorites(mockMeals);
    }, [favorites]);
    
    return (
        <Container>
            <Header />
            <div id="page">
                <section id="banner">
                    <section id="hero">
                        <img src={banner} alt='Imagem de ingredientes coloridos com um efeito de espalhamento no ar.' />
                        <section id="headlines">
                            <h1>Sabores inigualáveis</h1>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                        </section>
                    </section>
                </section>
                <main>
                    <section>
                        <h2>Favoritos</h2>
                        <CarouselComponent meals={favorites}/>
                    </section> 
                </main>
            </div>
            <Footer />
        </Container>
    )
}