import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

const MealsContext = createContext({});

function MealsProvider({ children }) {
    const [data, setData] = useState([]);
    const [orders, setOrders] = useState({})

    async function getMeals() {

        const mealsResponse = await api.get("/meals");

        const meals = mealsResponse.data;

        console.log(mealsResponse.data);

        setData({ meals });

        localStorage.setItem("@foodexplorer:meals", JSON.stringify(meals));
    }

    useEffect(() => {
        getMeals();
    }, [])


    return (
        <MealsContext.Provider
            value={{
                meals: data.meals,
                getMeals
                // updateOrder
            }}
        >
            {children}
        </MealsContext.Provider>
    );
}

function useMeals() {
    const context = useContext(MealsContext);

    return context;
}

export { MealsProvider, useMeals };
