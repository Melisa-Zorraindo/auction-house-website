import { renderNavbarDesktop } from "./components/navbar/desktopNavbar.js";
import { renderNavbarMobile } from "./components/navbar/mobileNavbar.js";
import { loadFromStorage } from "./storage/load.js";
import { logout } from "./handlers/logout.js";

const profile = loadFromStorage("profile");

//render navigation bars
renderNavbarDesktop();
renderNavbarMobile();

//make log out functionaliy available only if there's a profile saved in storage
if (profile) {
  logout();
}
