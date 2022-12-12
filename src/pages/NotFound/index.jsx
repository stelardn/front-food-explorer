import { Container } from "./styles";
import {Footer} from '../../components/Footer';
import banner from '../../assets/banner.png';
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <Container>
            <section id="banner">
                <section id="hero">
                    <img src={banner} alt='Imagem de ingredientes coloridos com um efeito de espalhamento no ar.' />
                    <section id="headlines">
                        <h1>404</h1>
                        <p>Ops... A página que você está procurando não foi encontrada.</p>
                        <Link to='/'>Voltar para Home</Link>
                    </section>
                </section>
            </section>
            <Footer/>
        </Container>
    )
}