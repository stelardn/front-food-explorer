import { Container } from "./styles";

import { NewIngredient } from './NewIngredient';
import { OldIngredient } from './OldIngredient';


export function Ingredient({ name, onChange, isNew, ...rest }) {
    return (
        <Container>
            {isNew ? <NewIngredient onChange={onChange} {...rest} /> : <OldIngredient name={name} {...rest} />}
        </Container>
    )
}