import Swal from "sweetalert2";


export const handleShowImageDetails = (image) => {
  const title = image.title ? image.title : `Title: ${image.public_id}`;
  const description = image.description ? image.description : 'add description';

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
    customClass: {
      container: "cc-sweetalert2",
      popup: "pop-sweetalert2",
      image: "image-sweetalert2",
      title: "title-sweetalert2",
      content: "content-sweetalert2",
      "text-sweetalert2": "text-sweetalert2",
    },
    width: "80%", 
  });
};

