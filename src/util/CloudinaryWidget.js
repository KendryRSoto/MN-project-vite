export function openCloudinaryWidget(setImages) {
  // Crea el widget de carga de imágenes de Cloudinary
  let myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dstgujjlr",
      uploadPreset: "h6iv0he4",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        // Crea un objeto con la información de la nueva imagen
        const newImage = {
          url: result.info.url,
          public_id: result.info.public_id,
        };

        setImages((prev) => [...prev, newImage]);

        const datosLocalStorage =
          JSON.parse(localStorage.getItem("user")) || {};
        const user = datosLocalStorage.user || {};
        const images = user.images || [];

        images.push(newImage);
        user.images = images;
        datosLocalStorage.user = user;
        localStorage.setItem("user", JSON.stringify(datosLocalStorage));
      }
    }
  );
  myWidget.open();
}
