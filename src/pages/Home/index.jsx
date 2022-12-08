import { Container } from "./styles";

import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CarouselComponent } from '../../components/CarouselComponent';

import banner from '../../assets/banner.png';

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Home() {

    const [meals, setMeals] = useState([]);
    const [mealTypes, setMealTypes] = useState([]);
    const [favorites, setFavorites] = useState([]);

    function capitalize(str) {
        const firstLetter = str[0].toUpperCase();

        const otherLetters = str.slice(1);

        return firstLetter + otherLetters;
    }

    useEffect(() => {
        async function fetchMeals() {
            const mealsResponse = await api.get("/meals");

            const savedMeals = mealsResponse.data;

            setMeals([...savedMeals]);
        }

        fetchMeals();

    }, [favorites]);

    useEffect(() => {
        const favoriteMeals = meals.filter(meal => meal.isFavorite === true);

        setFavorites(favoriteMeals);
    }, []);


    useEffect(() => {
        setMealTypes(new Set(meals.map(meal => meal.type)))
    }, [meals]);

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
                    {
                        [...mealTypes].map(type => (
                            <section>
                                <h2>{capitalize(type)}</h2>
                                <CarouselComponent meals={meals.filter(meal => meal.type === type)} key={type} />
                            </section>
                        ))
                    }
                </main>
            </div>
            <Footer />
        </Container>
    )
}