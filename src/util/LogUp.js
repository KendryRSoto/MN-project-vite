import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const handleLogUp = (navegar) => {
  

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
      localStorage.removeItem("user");
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      navegar("/");
    }
  });
};

export { handleLogUp };
