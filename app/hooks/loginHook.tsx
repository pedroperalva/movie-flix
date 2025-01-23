import { useState, useContext } from "react";
import { context } from "../context";
import { api2 } from "../utils/api";

const useLogin = () => {
  const [loading, setLoading] = useState(false); // For tracking login state
  const [error, setError] = useState(null); // For storing login errors
  const { setUser, setUserToken } = useContext(context);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api2.post("/auth/login", { email, password });

      setUserToken(response.data.access_token);
      setUser({
        name: response.data.name,
        email: response.data.email,
        id: response.data.id,
      });
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          name: response.data.name,
          email: response.data.email,
          id: response.data.id,
        })
      );

      return response.data.name;
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
