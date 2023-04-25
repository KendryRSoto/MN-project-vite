export function openCloudinaryWidget(setImages) {
  let myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dstgujjlr",
      uploadPreset: "h6iv0he4",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
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
