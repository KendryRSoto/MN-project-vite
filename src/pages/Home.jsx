import { useState } from "react";
import { Headerhome } from "../Componentes/headerhome";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsTrash3, BsPencil } from "react-icons/bs";
import { deleteImage } from "../util/deleteImg";
import "../Style/style-home.css";
import { useAuth } from "../util/useAuth";
import { openCloudinaryWidget } from "../util/cloudinaryWidgetss.js";
import { ToastContainer } from "react-toastify";
import { getImagesFromLocalStorage } from "../util/imageReload";
import { handleShowImageDetails } from "../util/showImage";
import { showImageDetailsForm } from "../util/showImageDetailsForm";
import Swal from "sweetalert2";

export function Home() {
  const [images, setImages] = useState([]);

  useAuth();
  getImagesFromLocalStorage(setImages);

  const handleDeleteImage = (public_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteImage(public_id);
        setImages((prevImages) =>
          prevImages.filter((image) => image.public_id !== public_id)
        );
      }
    });
  };

  return (
    <div className="box-master">
      <Headerhome />
      <br />
      <div className="control-Panel">
        <button
          className=" button"
          id="uplod-widget"
          onClick={() => openCloudinaryWidget(setImages)}
        >
          Upload <AiOutlineCloudUpload className="icon" />
        </button>
      </div>
      <div className="conteiner-p">
        <div className="images-preview-container">
          {images.map((image, index) => (
            <div key={index} className="image-preview">
              <BsPencil
                className="edit-icon"
                onClick={() => showImageDetailsForm(image)}
              />
              <BsTrash3
                className="delete-icon"
                onClick={() => handleDeleteImage(image.public_id)}
              />
              <img
                src={image.url}
                className="img-s"
                onClick={() => handleShowImageDetails(image)}
              />
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
