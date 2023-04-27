import Swal from "sweetalert2";

export function showImageDetailsForm(image) {
  Swal.fire({
    title: "Add title and description",
    html: `
        <label for="title">Title:</label>
        <input type="text" id="title" name="title">
        <br>
        <br>
        <label for="description">Description:</label>
        <textarea id="description" name="description"></textarea>
      `,
    focusConfirm: false,
    preConfirm: () => {
      // Cuando se hace clic en "OK", obtiene el título y la descripción ingresados
      const title = Swal.getPopup().querySelector("#title").value;
      const description = Swal.getPopup().querySelector("#description").value;
      return { title, description };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      // Actualiza los datos de la imagen en el almacenamiento local
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
      location.reload();
    }
  });
}
