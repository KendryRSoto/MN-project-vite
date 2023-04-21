import Swal from "sweetalert2";
// obtener el usuario y borrar los datos
const handleLogUp = (navegar) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    backdrop: true,
    background:'#fff',
    width: '200xp',

    
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("user");
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      navegar("/");
    }
  });
};

export { handleLogUp };
