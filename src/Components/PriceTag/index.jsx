import { Container } from "./styles";

export function PriceTag({price}) {
    return (
        <Container>
            <div>R$ {String(price + ',').padEnd(5, '0')}</div>
        </Container>
    )
}