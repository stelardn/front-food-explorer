import { Container } from "./styles";
import { useState } from "react";

export function QtyInput() {

    const [amount, setAmount] = useState(1);

    function handleAdd() {
        if (amount != 99) {
            setAmount(previous => previous + 1);
        } else {
            alert('Quantidade máxima do produto atingida!')
        }
    }

    function handleMinus() {
        if (amount != 1) {
            setAmount(previous => previous - 1);
        }
    }

    return (
        <Container>
            <button onClick={handleMinus}>-</button>
            <input disabled={true} value={String(amount).padStart(2, '0')} />
            <button onClick={handleAdd}>+</button>
        </Container>
    )
}