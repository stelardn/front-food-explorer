import { Container } from "./styles";

import { FiX, FiPlus } from 'react-icons/fi';

export function OldIngredient({ name, isNew, onClick }) {
    return (
        <Container>
            <span>{name}</span>
            <FiX onClick={onClick} />
        </Container>
    )
}