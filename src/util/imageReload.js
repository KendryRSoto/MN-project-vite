import { useEffect } from "react";

export function getImagesFromLocalStorage(setImages) {
  useEffect(() => {
    const datosLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
    const user = datosLocalStorage.user || {};
    const images = user.images || [];

    setImages(images);
  });
}
