import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Esta funcion busca el usurio en el localStora para mantenerlo o no en el home.
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
