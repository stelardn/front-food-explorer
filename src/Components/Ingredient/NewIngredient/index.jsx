import { Container } from "./styles";

import { FiX, FiPlus } from 'react-icons/fi';

export function NewIngredient({ name, onClick, ...rest }) {
    return (
        <Container>
            <input placeholder="Adicionar" maxLength={25} />
            <FiPlus onClick={onClick} />
        </Container>
    )
}