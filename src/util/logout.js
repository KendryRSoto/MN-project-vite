export function logoutUser(navegar) {
  let keys = Object.keys(localStorage);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let inf = JSON.parse(localStorage.getItem(key));
    if (inf.hasOwnProperty("login") && inf.login === true) {
      inf.login = false;
      localStorage.setItem(key, JSON.stringify(inf));
      navegar("/");
      break;
    }
  }
}
