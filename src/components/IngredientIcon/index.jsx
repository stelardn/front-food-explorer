import { Container } from "./styles";
import ingredientPlaceHolder from '../../assets/ingredient-placeholder.png';
import { api } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

export function IngredientIcon({ ingredient }) {
    const [picture, setPicture] = useState(ingredientPlaceHolder);

    useEffect(() => {
        async function fetchUrl() {
            try {
                const response = await api.get(`/public/${ingredient.picture}`);

                setPicture(`${api.defaults.baseURL}/public/${ingredient.picture}`);

                return response;
            } catch (error) {
                return;
            }
        }

        fetchUrl();

    }, [])


    return (
        <Container>
            <img src={picture} alt={`Imagem de ${ingredient.name}`} />
            <legend>{ingredient.name}</legend>
        </Container>
    )
}