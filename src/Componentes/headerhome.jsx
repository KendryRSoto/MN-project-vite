import "../Style/style-headerhome.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function Headerhome() {
  let navegar = useNavigate();

  const handleLogUp = () => {
    navegar("/home");
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
      }
    });
  };

  return (
    <div className="header-home">
      <h1
        className="tittle-home"
        onClick={() => {
          navegar("/home");
        }}
      >
        Galery Home
      </h1>
      <NavDropdown
        title="Menu"
        id="navbarScrollingDropdown"
        className="button-home"
      >
        <NavDropdown.Item
          onClick={() => {
            navegar("/account");
          }}
        >
          Cuenta
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={handleLogUp}>LOG UP</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
