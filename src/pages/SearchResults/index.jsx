import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CarouselComponent } from '../../components/CarouselComponent';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function SearchResults({ match, location }) {

    const { fetchOrders } = useAuth();
    const query = useQuery();

    const [meals, setMeals] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [filter, setFilter] = useState(query.get('filter'));

    async function fetchMeals() {
        const mealsResponse = await api.get(`/meals?filter=${filter}`);

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
        fetchMeals();

    }, [favorites, filter]);

    useEffect(() => {
        const favoriteMeals = meals.filter(meal => meal.isFavorite === true);

        setFavorites(favoriteMeals);
    }, []);

    useEffect(() => {
        setFilter(query.get('filter'));
    }, [query])

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