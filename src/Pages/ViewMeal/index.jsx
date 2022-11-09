import { useState } from "react";
import { Container } from "./styles";
import { QtyInput } from "../../Components/QtyInput";

export function ViewMeal() {
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
            <QtyInput handleAdd={handleAdd} handleMinus={handleMinus} amount={amount} />
        </Container>
    )
}