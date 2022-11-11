import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Container, Main } from "./styles";

import { QtyInput } from "../../Components/QtyInput";
import { PriceTag } from "../../Components/PriceTag";
import { TextButton } from '../../Components/TextButton';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { LinkButton } from "../../Components/LinkButton";

import { FaHeart, FaRegHeart } from 'react-icons/fa';

import mealPicture from '../../assets/pic1.png';
import { FaAngleLeft } from "react-icons/fa";


export function ViewMeal({ data }) {
    const [amount, setAmount] = useState(1);
    const [favorite, setFavorite] = useState(false);

    // const navigate = useNavigate();

    // function handleBack() {
    //     navigate(-1);
    // }

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

    //useffect para data

    return (
        <Container>
            <Header />
            <Main>
                <LinkButton content='voltar' icon={FaAngleLeft}/>
                {favorite ? <FaHeart size={32} onClick={handleFavorite} /> : <FaRegHeart size={32} onClick={handleFavorite} />}
                <img src={mealPicture} />
                <h3>Salada Ravanello</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, excepturi nesciunt. Soluta minima reprehenderit dolor fuga at eum consectetur esse perspiciatis distinctio deleniti maiores itaque dolore omnis ea, et nemo.</p>
                <PriceTag />
                <div className="include-amount">
                    <QtyInput handleAdd={handleAdd} handleMinus={handleMinus} amount={amount} />
                    <TextButton content='incluir' />
                </div>
            </Main>
            <Footer />
        </Container>
    )
}