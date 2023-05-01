import { useState } from "react";
import "../Style/style-form-register.css";
import { useNavigate } from "react-router-dom";
import Header from "../Componentes/Header";
import Swal from "sweetalert2";
import { Alert } from "../Componentes/Alert";
import { ToastContainer } from "react-toastify";

export function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navegar = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
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

  const handleRegister = () => {
    let user = {
      name: name,
      lastname: lastName,
      email: email,
      password: password,
      login: false,
    };

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let vali = re.test(String(email).toLowerCase());

    if (name.length && lastName.length > 0 && vali === true) {
      if (password.length > 6) {
        localStorage.setItem(`user`, JSON.stringify(user));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "The User Registered Successfully",
          showConfirmButton: false,
          timer: 1800,
        });
        navegar("/");
      } else {
        Alert("the email or the password is incorrect");
      }
    } else {
      Alert("All fields are required");
    }
  };

  return (
    <div className="Register">
      <Header />

      <div className="form-register">
        <div className="tittle-register">
          <h2>REGISTER</h2>
        </div>
        <form onChange={handleChange}>
          <label className="label-name-register">Name</label>

          <input
            className="input-register"
            type="text"
            placeholder="Entry the Name"
            name="name"
            required
          />

          <label className="label-name-register">Lastname</label>
          <input
            className="input-register"
            type="text"
            placeholder="Entry the Lastname"
            name="lastname"
            required
          />

          <label className="label-name">Email</label>
          <input
            className="input-name-register"
            type="email"
            placeholder="Entry the Email"
            name="email"
            required
          />

          <label className="label-name">Password</label>
          <input
            className="input-name-register"
            type="password"
            placeholder="Entry the Password"
            name="password"
            required
            minLength="6"
          />

          <button className="button-R-register" onClick={handleRegister}>
            Register
          </button>
          <button
            className="button-B-register"
            onClick={() => {
              navegar("/");
            }}
          >
            Back
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}
