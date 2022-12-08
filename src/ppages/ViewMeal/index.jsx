import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Container, Main } from "./styles";

import { QtyInput } from "../../components/QtyInput";
import { PriceTag } from "../../components/PriceTag";
import { TextButton } from '../../components/TextButton';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkButton } from "../../components/LinkButton";

import alface from '../../assets/alface.png';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { TfiReceipt } from 'react-icons/tfi';


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
            <Main id="main">
                <LinkButton content='voltar' icon={FaAngleLeft} />
                {favorite ? <FaHeart size={32} onClick={handleFavorite} /> : <FaRegHeart size={32} onClick={handleFavorite} />}
                <img src={mealPicture} id='meal-picture' />
                <div className="details">
                    <h3>Salada Ravanello</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, excepturi nesciunt. Soluta minima reprehenderit dolor fuga at eum consectetur esse perspiciatis distinctio deleniti maiores itaque dolore omnis ea, et nemo.</p>
                    <div className="ingredients">
                        <div className="ingredient">
                            <img src={alface} />
                            <legend>alface</legend>
                        </div>
                        <div className="ingredient">
                            <img src={alface} />
                            <legend>alface</legend>
                        </div>
                    </div>
                    <div className="price-calculation">
                        <PriceTag />
                        <div className="include-amount">
                            <QtyInput handleAdd={handleAdd} handleMinus={handleMinus} amount={amount} />
                            <TextButton content='incluir' icon={TfiReceipt} />
                        </div>
                    </div>

                </div>
            </Main>
            <Footer />
        </Container>
    )
}