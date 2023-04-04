import { useEffect, useState } from "react";
import { Headerhome } from "../Componentes/headerhome";
import Swal from "sweetalert2";
import '../Style/style-account.css'
import withReactContent from "sweetalert2-react-content";

export function Account() {
  const [name, setName] = useState("");
  const [segLastName, setSegLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    const datosLocalStorage = JSON.parse(localStorage.getItem("user"));
    setName(datosLocalStorage.name);
    setSegLastName(datosLocalStorage.lastname);
    setEmail(datosLocalStorage.email);
    setPass(datosLocalStorage.password);
  }, []);

  const handleChange = (key, value) => {
    const datosLocalStorage = JSON.parse(localStorage.getItem("user"));
    datosLocalStorage[key] = value;
    localStorage.setItem("user", JSON.stringify(datosLocalStorage));
  };

  const text = pass;
  const maskedText = text.replace(/\S/g, "*");

  return (
    <div className="account">
      <Headerhome />

      <div className="boxsecund">
        
        <div
          className="namebox"
          onClick={() => {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              title: "Edit Name",
              input: "text",
              inputValue: name,
              showCancelButton: true,
              inputValidator: (value) => {
                if (!value) {
                  return "Name cannot be empty";
                }
              },
              preConfirm: (name) => {
                setName(name);
                handleChange("name", name);
              },
            });
          }}
        >
          Name: {name}
        </div>

        <div
          className="seglastnamebox"
          onClick={() => {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              title: "Edit Name",
              input: "text",
              inputValue: segLastName,
              showCancelButton: true,
              inputValidator: (value) => {
                if (!value) {
                  return "Name cannot be empty";
                }
              },
              preConfirm: (segLastName) => {
                setName(segLastName);
                handleChange("Last Name", segLastName);
              },
            });
          }}
        >
          Last Name: {segLastName}
        </div>

        <div
          className="emailbox"
          onClick={() => {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              title: "Edit Email",
              input: "email",
              inputValue: email,
              showCancelButton: true,
              inputValidator: (value) => {
                if (!value) {
                  return "Email cannot be empty";
                }
              },
              preConfirm: (email) => {
                setEmail(email);
                handleChange("email", email);
              },
            });
          }}
        >
          Email: {email}
        </div>

        <div
          className="passbox"
          onClick={() => {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              title: "Edit Password",
              html:
                `<input id="current-password" class="swal2-input" type="password" placeholder="Current Password">` +
                `<input id="new-password" class="swal2-input" type="password" placeholder="New Password">`,
              showCancelButton: true,
              confirmButtonText: "Save Changes",
              preConfirm: () => {
                const currentPassword =
                  document.getElementById("current-password").value;
                const newPassword =
                  document.getElementById("new-password").value;
                if (!currentPassword || !newPassword) {
                  Swal.showValidationMessage("Please fill in all fields");
                } else if (currentPassword !== pass) {
                  Swal.showValidationMessage("Current password is incorrect");
                } else {
                  setPass(newPassword);
                  handleChange("password", newPassword);
                }
              },
            });
          }}
        >
          Password: {maskedText}
        </div>
      </div>
    </div>
  );
}
