import { Container } from "./styles";

import { FiX, FiPlus } from 'react-icons/fi';

import { NewIngredient } from './NewIngredient';
import { OldIngredient } from './OldIngredient';


export function Ingredient({ name, isNew, ...rest }) {
    return (
        <Container>
            {isNew ? <NewIngredient {...rest} /> : <OldIngredient name={name} {...rest} />}
        </Container>
    )
}