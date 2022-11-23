import { loadFromStorage } from "../../storage/load.js";

const profile = loadFromStorage("profile");

export function renderNavbarDesktop() {
  const NAVBAR_DESKTOP_CONTAINER = document.querySelector("#DesktopNavbar");

  if (profile) {
    NAVBAR_DESKTOP_CONTAINER.innerHTML = `   <a class="navbar-brand" href="./index.html">
                                            <img src="./src/assets/logo.png" alt="logo"/>
                                        </a>
                                        <div class="d-flex gap-3">
                                            <div class="d-flex flex-column align-items-center text-primary me-5">
                                                <span class="material-symbols-outlined"> add_box </span>
                                                <span class="fs-7">New listing</span>
                                            </div>
                                            <div class="d-flex flex-column align-items-center text-primary me-5">
                                                <span class="material-symbols-outlined"> currency_exchange </span>
                                                <span class="fs-7">NOK</span>
                                            </div>
                                            <div class="d-flex flex-column align-items-center text-primary me-5">
                                                <span class="material-symbols-outlined"> payments </span>
                                                <span class="fs-7">1000 credits</span>
                                            </div>

                                            <!--source: https://stackoverflow.com/questions/67136313/how-to-create-button-with-text-under-icon-using-bootstrap-5-or-css-->
                                            <div>
                                                <div class="custom-dropdown">
                                                    <img
                                                    src="./src/assets/compressed-girl-avatar.jpg"
                                                    class="m-auto mb-1 rounded-circle profile-img-small"
                                                    alt="profile picture"
                                                    />
                                                    <b
                                                    class="dropdown-toggle"
                                                    id="profile-dropdown"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                    >
                                                    Profile
                                                    </b>
                                                    <ul class="dropdown-menu" aria-labelledby="profile-dropdown">
                                                    <li>
                                                        <a class="dropdown-item d-flex my-2" href="./profile.html"
                                                        ><span class="material-symbols-outlined me-2">
                                                            account_circle </span
                                                        >View profile</a
                                                        >
                                                    </li>
                                                    <li class="dropdown-item my-2">
                                                        <button
                                                        type="button"
                                                        class="nav-link d-flex justify-content-start align-items-center text-primary border-0 bg-transparent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#edit-profile-modal"
                                                        >
                                                        <span class="material-symbols-outlined"> edit_square </span
                                                        ><span class="ms-2">Edit profile </span>
                                                        </button>
                                                    </li>
                                                    <li class="dropdown-item my-2">
                                                        <button
                                                        type="button"
                                                        class="nav-link d-flex justify-content-start align-items-center text-primary border-0 bg-transparent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#new-listing-modal"
                                                        >
                                                        <span class="material-symbols-outlined"> add_box </span
                                                        ><span class="ms-2">New listing </span>
                                                        </button>
                                                    </li>
                                                    <hr class="table-group-divider" />
                                                    <li>
                                                        <a class="dropdown-item d-flex" href="#"
                                                        ><span class="material-symbols-outlined me-2"> logout </span
                                                        >Log out</a
                                                        >
                                                    </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>`;
  } else {
    NAVBAR_DESKTOP_CONTAINER.innerHTML = `<a class="navbar-brand" href="./index.html">
                                        <img src="./src/assets/logo.png" alt="logo"/>
                                    </a>
                                    <div class="d-flex gap-3">
                                        <div class="d-flex flex-column align-items-center text-primary me-5">
                                            <span class="material-symbols-outlined"> currency_exchange </span>
                                            <span class="fs-7">NOK</span>
                                        </div>
                                        <div>
                                            <a href="./profile-login.html" class="btn btn-primary">Log in</a>
                                        </div>
                                        <div>
                                            <a href="./profile-signup.html" class="btn btn-outline-primary"
                                                >Sign up</a
                                            >
                                        </div>
                                    </div>`;
  }
}
