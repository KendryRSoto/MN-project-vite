import Header from "../Componentes/Header";
import "../Style/style-form.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "../Componentes/Alert";
import { ToastContainer } from "react-toastify";

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

  const handleLogin = (e) => {
    e.preventDefault();
    let keys = Object.keys(localStorage);
    let userFound = false;
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let inf = JSON.parse(localStorage.getItem(key));
      if (inf.email === email) {
        userFound = true;
        if (inf.password === password) {
          navegar("/home");
          break;
        } else {
          Alert("The password is incorrect, please try again!");
          break;
        }
      }
    }
    if (!userFound) {
      Alert("No registered user");
    } else if (!email || !password) {
      Alert("All fields are required");
    }
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

          <button className="button-L" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
