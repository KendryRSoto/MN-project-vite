import Header from "../Componentes/Header";
import "../Style/style-form.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "../Componentes/Alert";
import { ToastContainer } from "react-toastify";
import { handleLogin } from "../util/handleLogin";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  const handleChangeLogin = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const navegar = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    handleLogin(email, password, navegar, Alert);
  };

  return (
    <div className="login">
      <Header />

      <div className="form">
        <div className="tittle-login">
          <h2>Login</h2>
        </div>
        <form className="mb-3" onChange={handleChangeLogin}>
          <label className="label-name">Email</label>
          <input
            className="input-name"
            type="email"
            placeholder="Entry the Email"
            name="email"
            required
          />

          <label className="label-name">Password</label>
          <input
            className="input-name"
            type="password"
            placeholder="Entry the Password"
            name="password"
            required
            minLength="6"
          />
          <Link className="link-register" to="/register">
            To register click here
          </Link>
          <br />

          <button className="button-L" onClick={handleLoginClick}>
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
