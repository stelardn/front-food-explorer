import { useState } from "react";
import { Container } from "./styles";

import { QtyInput } from "../QtyInput";
import { PriceTag } from "../PriceTag";
import { TextButton } from '../TextButton';

import { FaHeart, FaRegHeart, FaAngleRight } from 'react-icons/fa';

import mealPicture from '../../assets/pic1.png';
import { api } from "../../services/api";


export function MealItem({ data, className, onHeartClick }) {
    const [amount, setAmount] = useState(1);
    const [favorite, setFavorite] = useState(data.isFavorite);

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

    function handleFavorite() {
        if (favorite) {
            api.delete(`/favorites/${data.id}`)
                .then(() => {
                    alert(`${data.name} - ${data.id} removido dos favoritos!`)
                    onHeartClick();
                    setFavorite(false);
                })
                .catch((error) => alert(`${error.toString()}`))
        } else {
            api.post('/favorites', { meal_id: data.id })
                .then(() => {
                    alert(`${data.name} adicionado aos favoritos!`)
                    setFavorite(true);
                })
                .catch((error) => alert(`${error.toString()}`))
        }
    }

    return (
        <Container className={className}>
            {favorite ? <FaHeart size={32} onClick={handleFavorite} /> : <FaRegHeart size={32} onClick={handleFavorite} />}
            <img src={`../../${data.picture}`} alt='Imagem do prato' />
            <div id="title">
                <h3>{data.name}</h3>
                <FaAngleRight />
            </div>
            <p>{data.description}</p>
            <PriceTag price={data.price} />
            <div className="include-amount">
                <QtyInput handleAdd={handleAdd} handleMinus={handleMinus} amount={amount} />
                <TextButton content='incluir' />
            </div>
        </Container>
    )
}