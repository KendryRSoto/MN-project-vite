export function handleLogin(email, password, navigate, Alert) {
  let keys = Object.keys(localStorage);
  let userFound = false;
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let inf = JSON.parse(localStorage.getItem(key));
    if (inf.email === email) {
      userFound = true;
      if (inf.password === password) {
        inf.login = true;
        localStorage.setItem(key, JSON.stringify(inf));
        navigate("/home");
        break;
      } else {
        Alert("The password is incorrect, please try again!");
        break;
      }
    }
  }
  //envio de alerta en caso que la informacion no coinscida
  if (!userFound) {
    Alert("No registered user");
  } else if (!email || !password) {
    Alert("All fields are required");
  }
}
