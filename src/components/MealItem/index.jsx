import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from '../../hooks/auth';
import { api } from "../../services/api";

import { Container } from "./styles";

import { QtyInput } from "../QtyInput";
import { PriceTag } from "../PriceTag";
import { TextButton } from '../TextButton';

import { FaHeart, FaRegHeart, FaAngleRight } from 'react-icons/fa';
import picturePlaceHolder from '../../assets/empty-plate.png';


export function MealItem({ data, className, onHeartClick }) {
    const { currentOrder } = useAuth();
    const navigate = useNavigate();

    const [currentOrderId, setCurrentOrderId] = useState(currentOrder.id);
    const [amount, setAmount] = useState(data.quantity);
    const [favorite, setFavorite] = useState(data.isFavorite);
    const pictureUrl = data.picture ? `${api.defaults.baseURL}/files/${data.picture}` : picturePlaceHolder;

    function handleGoToMeal() {
        navigate(`/meals/${data.id}`);
    }

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

    async function handleIncludeInOrder() {
        const response = await api.put(`/orders/${currentOrderId}`, {
            quantity: amount,
            meal_id: data.id
        });

        alert(response.data.toString());
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
            <img src={pictureUrl} alt='Imagem do prato' />
            <button id="title" onClick={handleGoToMeal}>
                {data.name}
                <FaAngleRight />
            </button>
            <p>{data.description}</p>
            <PriceTag price={data.price} />
            <div className="include-amount">
                <QtyInput handleAdd={handleAdd} handleMinus={handleMinus} amount={amount} />
                <TextButton content='incluir' onClick={handleIncludeInOrder} />
            </div>
        </Container>
    )
}