import { SHA1 } from "crypto-js";
import { Success } from "../Componentes/success";
import { Alert } from "../Componentes/Alert";

const cloudName = "dstgujjlr";
const apiKey = "847755325632252";
const apiSecret = "tu3p5IBBOcCyjBbCIlw8uuc5RMI";

function deleteImage(imgObj) {
  // Timestamp para la firma
  const timestamp = Math.floor(Date.now() / 1000);
  const signatureParams = `public_id=${imgObj}&timestamp=${timestamp}${apiSecret}`;
  // Generación de la firma SHA1
  const signature = SHA1(signatureParams).toString();

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      public_id: imgObj,
      api_key: apiKey,
      timestamp: timestamp,
      signature: signature,
    }),
  };
//borrar las imagenes de Cloudinary
  fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      Success("The image was deleted successfully");
      // Eliminar imagen del localStorage
      const datosLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
      const user = datosLocalStorage.user || {};
      const images = user.images || [];
      const newImages = images.filter((image) => image.public_id !== imgObj);
      user.images = newImages;
      datosLocalStorage.user = user;
      localStorage.setItem("user", JSON.stringify(datosLocalStorage));
    })
    .catch((error) => Alert(`there is an error ${error}`));
}

export { deleteImage };
