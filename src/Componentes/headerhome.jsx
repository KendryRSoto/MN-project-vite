import "../Style/style-headerhome.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { handleLogUp } from "../util/LogUp";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

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
        title={<BiUserCircle className="icon-user" />}
        id="navbarScrollingDropdown"
        className="button-home"
      >
        <NavDropdown.Item
          onClick={() => {
            navegar("/account");
          }}
        >
          Account
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => handleLogUp(navegar)}>
          LOG UP
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
