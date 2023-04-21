import Swal from "sweetalert2";


export const handleShowImageDetails = (image) => {
    
     Swal.fire({
      title: image.title,
      text: image.description,
      imageUrl: image.url,
      imageWidth: 500,
      imageHeight: 500,
      imageAlt: image.title,
      showConfirmButton: false,
      customClass: {
        popup: 'pop-sweetalert2',
        image: 'image-sweetalert2',
        title: 'title-sweetalert2',
      },
    });
 
  };