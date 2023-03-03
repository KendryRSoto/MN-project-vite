import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Componentes/Header";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

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
    };

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let vali = re.test(String(email).toLowerCase());

    if (name.length && lastName.length > 0 && vali === true) {
      if (password.length > 6) {
        localStorage.setItem(`${name} ${uuidv4()}`, JSON.stringify(user));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'the user registered successfully',
          showConfirmButton: false,
          timer: 1800
        })
        navegar("/");
      } else {
        Swal.fire(
          "the email or the password entered are not valid please verify"
        );
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required",
      });
    }
  };

  const buttonBack = (e) => {
    navegar("/");
  };
  return (
    <div className="Register">
      <Header />
      <div className="box-form">
        <div className="form">
          <div className="tittle-register">
            <h2>REGISTER</h2>
          </div>
          <form onChange={handleChange} className="mb-3">
            <label className="label-name">Name</label>
            <input
              className="input-name"
              type="text"
              placeholder="Entry the Name"
              name="name"
              required
            />

            <label className="label-lastname">Lastname</label>
            <input
              className="input-name"
              type="text"
              placeholder="Entry the Lastname"
              name="lastname"
              required
            />

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

            <button className="button-R" onClick={handleRegister}>
              Register
            </button>
            <button className="button-B" onClick={buttonBack}>
              Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
