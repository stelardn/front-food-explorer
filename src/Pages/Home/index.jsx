import { Container } from "./styles";

import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';

import banner from '../../assets/banner.png';

export function Home(){
    return(
        <Container>
            <Header/>
            <section id="banner">
                <img src={banner} alt='Imagem de ingredientes coloridos com um efeito de espalhamento no ar.'/>
                <section id="hero">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </section>
            </section>
            <main>
                <section>
                    <h2>Pratos principais</h2>
                </section>
            </main>
            <Footer/>
        </Container>
    )
}