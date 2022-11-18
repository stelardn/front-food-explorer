import { Container } from "./styles";

import { FiX, FiPlus } from 'react-icons/fi';

export function NewIngredient({ name, onChange, onClick, ...rest }) {
    return (
        <Container>
            <input placeholder="Adicionar" maxLength={25} onChange={onChange} {...rest}/>
            <FiPlus onClick={onClick} />
        </Container>
    )
}