import "../Style/style-headerhome.css";
import NavDropdown from "react-bootstrap/NavDropdown";

export function Headerhome() {
  return (
    <div className="header-home">
      <h1 className="tittle-home">Galery Home</h1>
      <NavDropdown
        title="menu"
        id="navbarScrollingDropdown"
        className="button-home"
      >
        <NavDropdown.Item href="#action3">Cuenta</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Delete account</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">LOG UP</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
