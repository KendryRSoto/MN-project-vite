import { useState } from "react";
import { Headerhome } from "../Componentes/headerhome";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsTrash3, BsPencil } from "react-icons/bs";
import { deleteImage } from "../util/deleteImg";
import "../Style/style-home.css";
import { useAuth } from "../util/useAuth";
import { openCloudinaryWidget } from "../util/cloudinaryWidget";
import { ToastContainer } from "react-toastify";
import { getImagesFromLocalStorage } from "../util/imageReload";
import { handleShowImageDetails } from "../util/showImage";

export function Home() {
  const [images, setImages] = useState([]);

  useAuth();
  getImagesFromLocalStorage(setImages);

  const handleDeleteImage = (public_id) => {
    deleteImage(public_id);
    setImages((prevImages) =>
      prevImages.filter((image) => image.public_id !== public_id)
    );
  };

  const handleEditImageDetails = (public_id) => {
    const imageIndex = images.findIndex((image) => image.public_id === public_id);
    const image = images[imageIndex];
    const newTitle = prompt("Enter new title:", image.title);
    const newDescription = prompt("Enter new description:", image.description);
  
    const updatedImage = {
      ...image,
      title: newTitle,
      description: newDescription,
    };
  
    const updatedImages = [...images];
    updatedImages.splice(imageIndex, 1, updatedImage);
    setImages(updatedImages);
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
              <BsPencil className="edit-icon" onClick={() => handleEditImageDetails(image.public_id)}/>
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
