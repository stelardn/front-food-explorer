import { Container } from "./styles";
import { useState } from "react";

export function QtyInput({ handleMinus, handleAdd, amount }) {
    return (
        <Container>
            <button onClick={handleMinus}>-</button>
            <input readOnly={true} value={String(amount).padStart(2, '0')} />
            <button onClick={handleAdd}>+</button>
        </Container>
    )
}