import { useState } from "react";
import { Container } from "./styles";

import { QtyInput } from "../QtyInput";
import { PriceTag } from "../PriceTag";
import { TextButton } from '../TextButton';

import { FaHeart, FaRegHeart, FaAngleRight } from 'react-icons/fa';

import mealPicture from '../../assets/pic1.png';


export function MealItem({ data, className }) { 
    const [amount, setAmount] = useState(1);
    const [favorite, setFavorite] = useState(false);

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
        favorite ? setFavorite(false) : setFavorite(true)
    }

    return (
        <Container className={className}>
            {favorite ? <FaHeart size={32} onClick={handleFavorite} /> : <FaRegHeart size={32} onClick={handleFavorite} />}
            <img src={`../../${data.picture}`} alt='Imagem do prato'/>
            <div id="title">
                <h3>{data.name}</h3>
                <FaAngleRight/>
            </div>
            <p>{data.description}</p>
            <PriceTag price={data.price}/>
            <div className="include-amount">
                <QtyInput handleAdd={handleAdd} handleMinus={handleMinus} amount={amount} />
                <TextButton content='incluir' />
            </div>
        </Container>
    )
}