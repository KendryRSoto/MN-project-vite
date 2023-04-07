import { updateLocalStorage } from "../util/Credencial";

export const cloudinaryWidget = (setImages, updateLocalStorage) => {
  let myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dstgujjlr",
      uploadPreset: "h6iv0he4",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setImages((prev) => [
          ...prev,
          { url: result.info.url, public_id: result.info.public_id },
        ]);

        const datosLocalStorage =
          JSON.parse(localStorage.getItem("user")) || {};

        if (!datosLocalStorage.user) {
          datosLocalStorage.user = {};
        }

        datosLocalStorage.user.url = result.info.url;
        datosLocalStorage.user.public_id = result.info.public_id;

        updateLocalStorage(datosLocalStorage);
      }
    }
  );
  myWidget.open();
};
