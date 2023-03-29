import { Headerhome } from "../Componentes/headerhome";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { useState } from "react";
import cloudinary from "cloudinary-core";
import "../Style/style-home.css";

export function Home() {
  const [images, setImages] = useState([]);
  const [toRemove, setToRemove] = useState(null);


  const handleDelete = async (imgObje) => {
    setToRemove(imgObje.public_id);
    const cloudinaryConfig = {
      cloudName: "dstgujjlr",
      apiKey: "847755325632252",
      apiSecret: "tu3p5IBBOcCyjBbCIlw8uuc5RMI",
    };

    const cloudinaryCore = new cloudinary.Cloudinary(cloudinaryConfig);

    try {
      const response = await cloudinaryCore.api.delete_resources(imgObje.public_id);
      setToRemove(null)
      return response.deleted[imgObje.public_id] === "deleted";
    } catch (error) {
      console.error("Error al borrar la imagen de Cloudinary:", error);
      return false;
    }
  };

  const handleOpenWidget = (e) => {
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
        }
      }
    );
    myWidget.open();
  };

  return (
    <div className="box-master">
      <Headerhome />
      <br />
      <div className="control-Panel">
        <button
          className=" button"
          id="uplod-widget"
          onClick={handleOpenWidget}
        >
          Upload <AiOutlineCloudUpload className="icon" />
        </button>
      </div>
      <div className="conteiner-p">
        <div className="images-preview-container">
          {images.map((images) => (
            <div className="image-preview">
              <BsTrash3 onClick={() => handleDelete(images)} />
              <img src={images.url} className="img-s" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
