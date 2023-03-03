import Header from "../Componentes/Header";
import "../Style/style-form.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

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
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let inf = JSON.parse(localStorage.getItem(key));

      if (inf.email === email) {
        if(inf.password === password){
          navegar('/home')
        }
        
        navegar("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "the username or password is incorrect, please try again!",
        });
      }
    }
  };

  console.log(isLogin);
  return (
    <div className="login">
      <Header />
      <div className="box-form">
        <div className="form">
          <div className="tittle-register">
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
            <Link to="/register">To register click here</Link>

            <button className="button-R" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
