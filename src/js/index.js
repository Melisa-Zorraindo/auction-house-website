import { renderHomepage } from "./handlers/renderHomepage.js";
import { renderAllListingsPage } from "./handlers/renderAllListingsPage.js";

//render different pages
const path = location.pathname;

if (path === "/index.html") {
  //render homepage
  renderHomepage();
} else if (path === "/all-listings.html") {
  //render all listings page
  renderAllListingsPage();
}
