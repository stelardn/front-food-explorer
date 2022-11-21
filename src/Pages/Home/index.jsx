import { Container } from "./styles";

import { useEffect, useState } from 'react';

import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import ImageSlider from "../../Components/ImageSlider";

import banner from '../../assets/banner.png';

import { mockMeals } from '../../../mockData';

export function Home() {
    const [meals, setMeals] = useState(mockMeals);

    useEffect(() => {
        setMeals(mockMeals);
    }, []);
    
    return (
        <Container>
            <Header />
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
                    <h2>Pratos principais</h2>
                    {/* <ImageSlider images={images}/> */}
                </section>
            </main>
            <Footer />
        </Container>
    )
}