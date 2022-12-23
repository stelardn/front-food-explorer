import { Container } from "./styles";

import { useEffect, useState, useRef } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CarouselComponent } from '../../components/CarouselComponent';

import banner from '../../assets/banner.png';

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { HeaderAdm } from "../../components/HeaderAdm";

import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function SearchResults({ match, location }) {

    const { fetchOrders } = useAuth();
    const query = useQuery();

    const [meals, setMeals] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [filter, setFilter] = useState(query.get('filter'));
    const ordersFetchedRef = useRef(false);


    function capitalize(str) {
        const firstLetter = str[0].toUpperCase();

        const otherLetters = str.slice(1);

        return firstLetter + otherLetters;
    }

    async function fetchMeals() {
        const mealsResponse = await api.get(`/meals?name=${filter}`);

        const savedMeals = mealsResponse.data;

        const current = await fetchOrders();

        const mealsWithQuantities = savedMeals.map(meal => {
            const newMeal = {
                ...meal,
                quantity: 0
            }

            current.items.forEach(item => {
                if (item.id === meal.id) {
                    newMeal.quantity = item.quantity
                }
            })

            return newMeal;
        })

        setMeals([...mealsWithQuantities]);
    }

    useEffect(() => {

        if (ordersFetchedRef.current) return;
        ordersFetchedRef.current = true;
        fetchMeals();

    }, [favorites]);

    useEffect(() => {
        const favoriteMeals = meals.filter(meal => meal.isFavorite === true);

        setFavorites(favoriteMeals);
    }, []);

    return (
        <Container>
            <Header />
            <div id="page">
                <main>
                    <section>
                        <h2>Resultados da busca por "{filter}"...</h2>
                        {meals && <CarouselComponent meals={meals} />}
                    </section>
                </main>
            </div>
            <Footer />
        </Container>
    )
}