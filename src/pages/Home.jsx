import { Headerhome } from "../Componentes/headerhome";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { useState } from "react";
import cloudinary from 'cloudinary-core';
import "../Style/style-home.css";

export function Home() {
  const [images, setImages] = useState([]);
  

  const handleDelete = () => {
    const cl = new cloudinary.Cloudinary({
      cloud_name: 'dstgujjlr',
      api_key: '847755325632252',
      api_secret: 'tu3p5IBBOcCyjBbCIlw8uuc5RMI'
    });

    cloudinary.v2.uploader.destroy(public_id, function (error, result) {
      console.log(result);
    });
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
              <BsTrash3 onClick={handleDelete} />
              <img src={images.url} className="img-s" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
