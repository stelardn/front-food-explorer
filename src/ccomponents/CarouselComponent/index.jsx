import React from "react";

import { Container } from "./styles";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { MealItem } from '../MealItem';

export function CarouselComponent({meals, className}) {
    return (
        <Container className={className}>
            <AliceCarousel
                disableDotsControls
                renderPrevButton={() => <FaAngleLeft className="prev-btn" size={40}/>}
                renderNextButton={() => <FaAngleRight className="next-btn" size={40}/>}
                responsive={{
                    0: { items: 1 },
                    768: { items: 2 },
                    1024: { items: 3 },
                    1440: { items: 3.47 }
                }}
                items={meals.map(item => (
                    <MealItem key={item.id} data={item}/>
                ))
                }
                
            />
        </Container>
    );
}