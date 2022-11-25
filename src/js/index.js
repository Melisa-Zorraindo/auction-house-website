import { renderHomepage } from "./handlers/renderHomepage.js";
import { renderAllListingsPage } from "./handlers/renderAllListingsPage.js";
import { renderMostPopularPage } from "./handlers/renderMostPopular.js";

//render different pages
const path = location.pathname;

if (path === "/index.html") {
  //render homepage
  renderHomepage();
} else if (path === "/all-listings.html") {
  //render all listings page
  renderAllListingsPage();
} else if (path === "/most-popular.html") {
  //render most popular page
  renderMostPopularPage();
}
