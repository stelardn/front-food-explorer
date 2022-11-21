import { Container } from "./styles";

export function PriceTag({price}) {
    return (
        <Container>
            <div>R$ {String(price).padStart(2, '0')}</div>
        </Container>
    )
}