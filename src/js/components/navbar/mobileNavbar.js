import { loadFromStorage } from "../../storage/load.js";

const profile = loadFromStorage("profile");

export function renderNavbarMobile() {
  const NAVBAR_MOBILE_CONTAINER = document.querySelector("#mobileNavbar");

  if (profile) {
    NAVBAR_MOBILE_CONTAINER.innerHTML = `<div class="container-fluid mb-5">
                                        <a class="navbar-brand" href="./index.html">
                                            <img src="./src/assets/logo.png" alt="logo"/>
                                        </a>
                                        <button
                                            class="navbar-toggler"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbar-mobile-user-logged-in"
                                            aria-controls="navbar-mobile-user-logged-in"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse"
                                        id="navbar-mobile-user-logged-in">
                                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link d-flex align-items-center text-primary"
                                                        href="./index.html"
                                                        ><span class="material-symbols-outlined ms-1"> home </span
                                                        ><span class="ms-2">Home</span></a
                                                    >
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link d-flex align-items-center text-primary"
                                                        href="./feed.html"
                                                        ><span class="material-symbols-outlined ms-1"> category </span
                                                        ><span class="ms-2">All listings</span></a
                                                    >
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link d-flex align-items-center text-primary"
                                                        href="#"
                                                        ><span class="material-symbols-outlined ms-1"> timer </span
                                                        ><span class="ms-2">Finish soon </span></a
                                                    >
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link d-flex align-items-center text-primary"
                                                        href="#"
                                                        ><span class="material-symbols-outlined ms-1">
                                                        switch_access_shortcut </span
                                                        ><span class="ms-2">Latest listings </span></a
                                                    >
                                                </li>
                                                <hr class="table-group-divider" />
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link d-flex align-items-center text-primary"
                                                        href="./profile.html"
                                                        ><span class="material-symbols-outlined ms-1">
                                                        account_circle </span
                                                        ><span class="ms-2">View profile </span></a
                                                    >
                                                </li>
                                                <li class="nav-item">
                                                    <button
                                                        type="button"
                                                        class="nav-link d-flex align-items-center text-primary border-0 bg-transparent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#edit-profile-modal"
                                                    >
                                                        <span class="material-symbols-outlined ms-1">
                                                        edit_square </span
                                                        ><span class="ms-2">Edit profile </span>
                                                    </button>
                                                </li>
                                                <li class="nav-item">
                                                    <button
                                                        type="button"
                                                        class="nav-link d-flex align-items-center text-primary border-0 bg-transparent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#new-listing-modal"
                                                    >
                                                        <span class="material-symbols-outlined ms-1"> add_box </span
                                                        ><span class="ms-2">New listing </span>
                                                    </button>
                                                </li>
                                                <hr class="table-group-divider" />
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link d-flex align-items-center text-primary"
                                                        href="#"
                                                        ><span class="material-symbols-outlined ms-1"> logout </span
                                                        ><span class="ms-2">Log out </span></a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>`;
  } else {
    NAVBAR_MOBILE_CONTAINER.innerHTML = `<div class="container-fluid mb-5">
                                        <a class="navbar-brand" href="./index.html">
                                            <img src="./src/assets/logo.png" alt="logo"/>
                                        </a>
                                        <button
                                            class="navbar-toggler"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbar-mobile-user-logged-out"
                                            aria-controls="navbar-mobile-user-logged-out"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse"
                                        id="navbar-mobile-user-logged-out">
                                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link d-flex align-items-center text-primary"
                                                        href="./profile-login.html"
                                                        ><span class="material-symbols-outlined ms-1"> login </span
                                                        ><span class="ms-2">Log in </span></a
                                                    >
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link d-flex align-items-center text-primary"
                                                        href="./profile-signup.html"
                                                        ><span class="material-symbols-outlined ms-1">
                                                        app_registration </span
                                                        ><span class="ms-2">Sign up </span></a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>`;
  }
}
