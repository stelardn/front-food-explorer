import { createContext, useContext, useEffect, useState } from "react";
import { SignIn } from "../pages/SignIn";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn(email, password) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { token, user } = response.data;

      setData({ token, user });

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      }

      return alert("Não foi possível logar. Tente novamente.");
    }
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("@foodexplorer:user");
    const savedToken = localStorage.getItem("@foodexplorer:token");

    setData({
      user: JSON.parse(savedUser),
      token: savedToken,
    });

    api.defaults.headers.common["Authorization"] = `Beares ${savedToken}`;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data.user,
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
