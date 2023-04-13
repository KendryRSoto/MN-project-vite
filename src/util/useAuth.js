import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navegar = useNavigate();

//Esta funcion busca el usurio en el localStora para mantenerlo o no en el home.  
  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("user");

    if (datosLocalStorage !== null) {
      navegar("/home");
    } else {
      navegar("/");
    }
  }, []);
};
