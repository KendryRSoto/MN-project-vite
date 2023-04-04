import { useEffect, useState } from "react";
import { Headerhome } from "../Componentes/headerhome";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { handleDelete } from "../util/Credencial";
import { useNavigate } from "react-router-dom";
import "../Style/style-home.css";

export function Home() {
  const [images, setImages] = useState([]);
  const navegar = useNavigate();

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("user");
  
    if (datosLocalStorage !== null) {
      navegar("/home");
    } else {
      navegar("/");
    }
  }, []);
  

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

          const datosLocalStorage =
            JSON.parse(localStorage.getItem("user")) || {};

          if (!datosLocalStorage.user) {
            datosLocalStorage.user = {};
          }

          datosLocalStorage.user.url = result.info.url;
          datosLocalStorage.user.public_id = result.info.public_id;

          localStorage.setItem("user", JSON.stringify(datosLocalStorage));
        }
      }
    );
    myWidget.open();
  };


  const handleDeleteImage = (public_id) => {
    handleDelete(public_id);
    setImages(prevImages => prevImages.filter(image => image.public_id !== public_id));
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
          {images.map((image) => (
            <div className="image-preview">
              <BsTrash3 className="delete-icon" onClick={() => handleDeleteImage (image.public_id)} />
              <img src={image.url} className="img-s" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
