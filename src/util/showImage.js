import Swal from "sweetalert2";

export const handleShowImageDetails = (image) => {

  const datosLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
  const user = datosLocalStorage.user || {};
  const images = user.images || [];
  const selectedImage = images.find((img) => img.public_id === image.public_id);
 
  const tit = selectedImage.title
  const desc = selectedImage.description
  

  const title = tit ? tit : `Add Title`;
  const description = desc ? desc : "add description";
  Swal.fire({
    html:
      '<div class="cc-sweetalert2">' +
      '<img class="image-sweetalert2" src="' +
      image.url +
      '" alt="' +
      title +
      '" />' +
      '<div class="content-sweetalert2">' +
      '<div class="title-sweetalert2">' +
      title +
      "</div>" +
      '<div class="text-sweetalert2">' +
      description +
      "</div>" +
      "</div>" +
      "</div>",
    showConfirmButton: false,
    showCloseButton: true,
    customClass: {
      container: "cc-sweetalert2",
      popup: "pop-sweetalert2",
      image: "image-sweetalert2",
      title: "title-sweetalert2",
      cancelButton: "cancel-button-sweetalert2",
      content: "content-sweetalert2",
      "text-sweetalert2": "text-sweetalert2",
    },
  
  });
};
