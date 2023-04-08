import { SHA1 } from "crypto-js";
import { Success } from "../Componentes/success";
import { Alert } from "../Componentes/Alert";

const cloudName = "dstgujjlr";
const apiKey = "847755325632252";
const apiSecret = "tu3p5IBBOcCyjBbCIlw8uuc5RMI";

function deleteImage(imgObj) {
  // Timestamp para la firma
  const timestamp = Math.floor(Date.now() / 1000);
  // Concatenación de los parámetros para la firma
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

  fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => Success("The image was deleted successfully"))
    .catch((error) => Alert(`there is an error ${error}`)
    );
}
export { deleteImage };
