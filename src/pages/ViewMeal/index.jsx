import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { Container, Main } from "./styles";

import { QtyInput } from "../../components/QtyInput";
import { PriceTag } from "../../components/PriceTag";
import { TextButton } from '../../components/TextButton';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkButton } from "../../components/LinkButton";

import picturePlaceHolder from '../../assets/empty-plate.png';

import alface from '../../assets/alface.png';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { TfiReceipt } from 'react-icons/tfi';


import mealPicture from '../../assets/pic1.png';
import { FaAngleLeft } from "react-icons/fa";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";


export function ViewMeal() {
    const { currentOrder } = useAuth();

    const [currentOrderId, setCurrentOrderId] = useState(currentOrder.id);
    const [amount, setAmount] = useState(0);
    const [favorite, setFavorite] = useState();
    const [data, setData] = useState();
    const pictureUrl = data && data.picture ? `${api.defaults.baseURL}/files/${data.picture}` : picturePlaceHolder;

    const params = useParams();
    const { fetchOrders } = useAuth();
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
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

    function handleFavorite() {
        if (favorite) {
            api.delete(`/favorites/${data.id}`)
                .then(() => {
                    alert(`${data.name} - ${data.id} removido dos favoritos!`)
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

    async function handleIncludeInOrder() {
        const response = await api.put(`/orders/${currentOrderId}`, {
            quantity: amount,
            meal_id: data.id
        });

        alert(response.data.toString());
    }

    async function fetchMealData() {
        const mealResponse = await api.get(`/meals/${params.id}`);

        const current = await fetchOrders();

        setData(mealResponse.data);

        current.items.forEach(item => {
            if (item.id === data.id) {
                setAmount(item.quantity)
            }
        });

        setFavorite(mealResponse.data.isFavorite);

    }

    useEffect(() => {
        fetchMealData();
    }, [])

    return (
        <Container>
            <Header />
            <Main id="main">
                <LinkButton content='voltar' icon={FaAngleLeft} onClick={handleBack} />
                {favorite ? <FaHeart size={32} onClick={handleFavorite} /> : <FaRegHeart size={32} onClick={handleFavorite} />}
                <img src={pictureUrl} alt='Imagem do prato' id='meal-picture' />
                {
                    data &&
                    <div className="details">
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
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
                            <PriceTag price={data.price} />
                            <div className="include-amount">
                                <QtyInput handleAdd={handleAdd} handleMinus={handleMinus} amount={amount} />
                                <TextButton content='incluir' icon={TfiReceipt} onClick={handleIncludeInOrder} />
                            </div>
                        </div>
                    </div>
                }
            </Main>
            <Footer />
        </Container>
    )
}