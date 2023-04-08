import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navegar = useNavigate();

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("user");

    if (datosLocalStorage !== null) {
      navegar("/home");
    } else {
      navegar("/");
    }
  }, []);
};
