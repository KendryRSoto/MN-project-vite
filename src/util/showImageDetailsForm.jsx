import Swal from "sweetalert2";

export function showImageDetailsForm(image) {
  const title = image.title ? image.title : `Add Title`;
  const description = image.description ? image.description : "Add description";

  Swal.fire({
    title: `Edit Image`,
    html: `
        <div>
          <h4>Title:</h4>
          <p>${title}</p>
        </div>
        <br>
        <div>
          <h4>Description:</h4>
          <p>${description}</p>
        </div>
        <br>
        <form id="image-details-form">
          <label for="title">New Title:</label>
          <input type="text" id="title" name="title">
          <br>
          <br>
          <label for="description">New Description:</label>
          <textarea id="description" name="description"></textarea>
        </form>
      `,
    focusConfirm: false,
    preConfirm: () => {
      const title = Swal.getPopup().querySelector("#title").value;
      const description = Swal.getPopup().querySelector("#description").value;

      if (!title && !description) {
        Swal.showValidationMessage("Please enter a title or a description.");
        return false;
      }

      return { title, description };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      if (!result.value.title && !result.value.description) {
        return;
      }

      const datosLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
      const user = datosLocalStorage.user || {};
      const images = user.images || [];

      const updatedImages = images.map((img) => {
        if (img.public_id === image.public_id) {
          img.title = result.value.title;
          img.description = result.value.description;
        }
        return img;
      });

      user.images = updatedImages;
      datosLocalStorage.user = user;
      localStorage.setItem("user", JSON.stringify(datosLocalStorage));
     
    }
  });
}
