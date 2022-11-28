import { Container } from "./styles";

import { useEffect, useState } from 'react';

import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { CarouselComponent } from '../../Components/CarouselComponent';

import banner from '../../assets/banner.png';

import { mockMeals } from '../../../mockData';

export function Home() {
    const [meals, setMeals] = useState(mockMeals);
    const [mealTypes, setMealTypes] = useState(new Set(meals.map(meal => meal.type)));

    useEffect(() => {
        setMeals(mockMeals);

        setMealTypes(new Set(meals.map(meal => meal.type)));
        console.log(mealTypes);

    }, []);

    function capitalize(str) {
        const firstLetter = str[0].toUpperCase();

        const otherLetters = str.slice(1);

        return firstLetter + otherLetters;

    }
    
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
                            <CarouselComponent meals={meals.filter(meal => meal.type === type)}/>
                        </section> 
                        ))
                    }
                </main>
            </div>
            <Footer />
        </Container>
    )
}