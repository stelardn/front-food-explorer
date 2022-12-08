import { Container } from "./styles";

import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CarouselComponent } from '../../components/CarouselComponent';

import banner from '../../assets/banner.png';

import { mockMeals } from '../../../mockData';
import { api } from "../../services/api";

export function Favorites() {
    const [meals, setMeals] = useState([]);
    const [removedMeal, setRemovedMeal] = useState(false);

    function handleRemoveMeal() {
        setRemovedMeal(true);
    }

    useEffect(() => {
        async function fetchMeals() {
            const response = await api.get('/favorites');

            const favoriteMeals = response.data.map(meal => {
                return {
                    ...meal,
                    id: meal.meal_id,
                    isFavorite: true
                }
            });

            setRemovedMeal(false);
            setMeals([...favoriteMeals]);
        }

        fetchMeals();

    }, [removedMeal]);

    return (
        <Container>
            <Header />
            <div id="page">
                <section id="banner">
                    <section id="hero">
                        <img src={banner} alt='Imagem de ingredientes coloridos com um efeito de espalhamento no ar.' />
                        <section id="headlines">
                            <h1>Sabores inigualáveis</h1>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                        </section>
                    </section>
                </section>
                <main>
                    <section>
                        <h2>Favoritos</h2>
                        {meals && <CarouselComponent meals={meals} onHeartClick={handleRemoveMeal} />}
                    </section>
                </main>
            </div>
            <Footer />
        </Container>
    )
}