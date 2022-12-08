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

  // async function updateOrder({ order_id, meal_id, quantity }) {
  //   try {
  //     const response = await api.put(`/${order_id}`, {
  //       meal_id, quantity
  //     });

  //     const user = await api.get(`/users/${user.id}`);





  //   } catch (_error) {
  //     return alert('Não foi possível atualizar o carrinho.');
  //   }
  // }

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
        user: data.user,
        meals: data.meals
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
