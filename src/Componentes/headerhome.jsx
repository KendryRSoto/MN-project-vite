import "../Style/style-headerhome.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { handleLogUp } from "../util/LogUp";
import { useNavigate } from "react-router-dom";

export function Headerhome() {
  let navegar = useNavigate();
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
