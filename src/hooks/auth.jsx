import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn(email, password) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { token, user } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;


      const mealsResponse = await api.get("/meals");

      const meals = mealsResponse.data;

      console.log(mealsResponse.data);

      setData({ token, user, meals });

      localStorage.setItem("@foodexplorer:meals", JSON.stringify(meals));

    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      }

      // return alert(error.toString());
      return alert("Não foi possível logar. Tente novamente.");
    }
  }

  function signOff() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:meals");

    api.defaults.headers.common["Authorization"] = '';

    setData({});

    return;
  }

  async function fetchOrders() {
    const ordersResponse = await api.get(`/orders?user=${data.user.id}`);

    const userOrders = ordersResponse.data;

    const lastOrder = userOrders[userOrders.length - 1];

    let orderId;

    if (!userOrders[0] || (lastOrder && lastOrder.status !== 1)) {
      try {
        const newOrder = await api.post('/orders');

        orderId = newOrder.data[0];
      } catch (error) {
        alert(error.toString());
      }
    } else {
      orderId = lastOrder.id;
    }

    const orderResponse = await api.get(`/orders/${orderId}`);

    const currentOrder = {
      ...orderResponse.data,
      id: orderId
    }

    setData({
      ...data,
      currentOrder: currentOrder
    });

    return currentOrder;
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("@foodexplorer:user");
    const savedToken = localStorage.getItem("@foodexplorer:token");
    const savedMeals = localStorage.getItem("@foodexplorer:meals");

    setData({
      user: JSON.parse(savedUser),
      meals: JSON.parse(savedMeals),
      token: savedToken,
    });

    api.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOff,
        fetchOrders,
        user: data.user,
        meals: data.meals,
        currentOrder: data.currentOrder
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
