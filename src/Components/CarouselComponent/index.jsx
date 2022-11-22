import React from "react";

import { Container } from "./styles";

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { MealItem } from '../MealItem';

export function CarouselComponent({meals}) {
    return (
        <Container>
            <AliceCarousel 
              responsive={{
                0: {
                    items: 1,
                },
                1024: {
                    items: 3
                }
              }}
                
            >
                {meals.map(item => (
                    <MealItem key={item.id} data={item}/>
                ))
                }
            </AliceCarousel>
        </Container>
    );
}