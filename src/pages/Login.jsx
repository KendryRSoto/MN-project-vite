import Header from "../Componentes/Header";
import "../Style/style-form.css";

export function Login() {
  return (
    <div className="login">
      <Header />
      <div className="div-form">
        <div>
          <form className="form">
            <div className="box-tittle">
              <h2 className="tittle-login">Login</h2>
            </div>
            <label className="label-login">User</label>
            <input type="email" className="input" placeholder='Enter the mail'/>
            <label className="label-login">Password</label>
            <input type="password" className="input" placeholder='Enter the Password'/>
            <a href="/regiter" className="link-regiter">Haven't you registered?</a>
            <br/>
            <button className="button-login">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
