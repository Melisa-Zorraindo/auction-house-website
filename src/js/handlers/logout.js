import { removeFromStorage } from "../storage/remove.js";

export function logout() {
  const LOGOUT_MOBILE = document.querySelector("#logout-mobile");
  const LOGOUT_DESKTOP = document.querySelector("#logout-desktop");

  LOGOUT_MOBILE.addEventListener("click", () => {
    removeFromStorage("accessToken");
    removeFromStorage("credits");
    removeFromStorage("profile");
    window.location.assign("./index.html");
  });

  LOGOUT_DESKTOP.addEventListener("click", () => {
    removeFromStorage("accessToken");
    removeFromStorage("credits");
    removeFromStorage("profile");
    window.location.assign("./index.html");
  });
}
