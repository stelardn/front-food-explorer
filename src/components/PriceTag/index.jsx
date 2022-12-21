import { Container } from "./styles";

export function PriceTag({ price }) {
    function formatNumberToPrice(number) {
        const numberWithCents = number.toFixed(2);

        const numberToStringWithComma = String(numberWithCents).replace('.', ',');

        return numberToStringWithComma;
    }

    return (
        <Container>
            <div>R$ {formatNumberToPrice(price)}</div>
        </Container>
    )
}