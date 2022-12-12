import { loadFromStorage } from "../../storage/load.js";

const profile = loadFromStorage("profile");
const credits = loadFromStorage("credits");

export function renderNavbarDesktop() {
  const NAVBAR_DESKTOP_CONTAINER = document.querySelector("#desktopNavbar");

  if (profile) {
    //fetch profile picture from storage, or set a default if there isn't
    const avatar =
      profile.avatar || "src/assets/compressed-avatar-placeholder.jpg";
    const anchorHome = document.createElement("a");
    anchorHome.setAttribute("href", "index.html");
    anchorHome.classList.add("navbar-brand");
    NAVBAR_DESKTOP_CONTAINER.prepend(anchorHome);

    const logoImage = document.createElement("img");
    logoImage.setAttribute("src", "src/assets/logo.png");
    logoImage.setAttribute("alt", "logo");
    anchorHome.append(logoImage);

    const dataContainer = document.createElement("div");
    dataContainer.classList.add("d-flex", "gap-3", "align-items-start");
    NAVBAR_DESKTOP_CONTAINER.append(dataContainer);

    const NewListingButton = document.createElement("button");
    NewListingButton.setAttribute("type", "button");
    NewListingButton.setAttribute("data-bs-toggle", "modal");
    NewListingButton.setAttribute("data-bs-target", "#new-listing-modal");
    NewListingButton.classList.add("btn", "btn-primary", "me-5");
    NewListingButton.innerHTML = "New listing";
    dataContainer.append(NewListingButton);

    const languageContainer = document.createElement("div");
    languageContainer.classList.add(
      "d-flex",
      "flex-column",
      "align-items-center",
      "text-primary",
      "me-5"
    );
    dataContainer.append(languageContainer);

    const languageIcon = document.createElement("span");
    languageIcon.classList.add("material-symbols-outlined");
    languageIcon.innerHTML = "language";
    languageContainer.append(languageIcon);

    const languageText = document.createElement("span");
    languageText.classList.add("fs-7");
    languageText.innerHTML = "English";
    languageContainer.append(languageText);

    const creditsContainer = document.createElement("div");
    creditsContainer.classList.add(
      "d-flex",
      "flex-column",
      "align-items-center",
      "text-primary",
      "me-5"
    );
    dataContainer.append(creditsContainer);

    const creditsIcon = document.createElement("span");
    creditsIcon.classList.add("material-symbols-outlined");
    creditsIcon.innerHTML = "payments";
    creditsContainer.append(creditsIcon);

    const creditsText = document.createElement("span");
    creditsText.classList.add("fs-7");
    creditsText.innerHTML = "biddable credits";
    creditsContainer.append(creditsText);

    /* source: https://stackoverflow.com/questions/67136313/how-to-create-button-with-text-under-icon-using-bootstrap-5-or-css */

    const profileContainer = document.createElement("div");
    dataContainer.append(profileContainer);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("custom-dropdown");
    profileContainer.append(imgContainer);

    const profileImg = document.createElement("img");
    profileImg.setAttribute("src", `${avatar}`);
    profileImg.setAttribute("alt", "profile picture");
    profileImg.classList.add(
      "m-auto",
      "mb-1",
      "rounded-circle",
      "profile-img-small"
    );
    imgContainer.append(profileImg);

    const dropdownIcon = document.createElement("b");
    dropdownIcon.classList.add("dropdown-toggle");
    dropdownIcon.setAttribute("id", "profile-dropdown");
    dropdownIcon.setAttribute("data-bs-toggle", "dropdown");
    dropdownIcon.setAttribute("aria-expanded", "false");
    dropdownIcon.innerHTML = "Profile";
    imgContainer.append(dropdownIcon);

    const ul = document.createElement("ul");
    ul.classList.add("dropdown-menu");
    ul.setAttribute("aria-labelledby", "profile-dropdown");
    dropdownIcon.append(ul);

    const firstLi = document.createElement("li");
    firstLi.classList.add("dropdown-item", "my-2");
    ul.append(firstLi);

    const viewProfileButton = document.createElement("button");
    viewProfileButton.setAttribute("type", "button");
    viewProfileButton.classList.add(
      "nav-link",
      "d-flex",
      "justify-content-start",
      "align-items-center",
      "text-primary",
      "border-0",
      "bg-transparent"
    );
    firstLi.append(viewProfileButton);

    const viewProfileIcon = document.createElement("span");
    viewProfileIcon.classList.add("material-symbols-outlined");
    viewProfileIcon.innerHTML = "account_circle";
    viewProfileButton.prepend(viewProfileIcon);

    const viewProfileText = document.createElement("span");
    viewProfileText.classList.add("ms-2");
    viewProfileText.innerHTML = "View profile";
    viewProfileButton.append(viewProfileText);

    viewProfileButton.addEventListener("click", () => {
      window.location.assign("profile.html");
    });

    const secondLi = document.createElement("li");
    secondLi.classList.add("dropdown-item", "my-2");
    ul.append(secondLi);

    const editButton = document.createElement("button");
    editButton.setAttribute("type", "button");
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#edit-profile-modal");
    editButton.classList.add(
      "nav-link",
      "d-flex",
      "justify-content-start",
      "align-items-center",
      "text-primary",
      "border-0",
      "bg-transparent"
    );
    secondLi.append(editButton);

    const editIcon = document.createElement("span");
    editIcon.classList.add("material-symbols-outlined");
    editIcon.innerHTML = "edit_square";
    editButton.append(editIcon);

    const editText = document.createElement("span");
    editText.classList.add("ms-2");
    editText.innerHTML = "Edit profile";
    editButton.append(editText);

    const thirdLi = document.createElement("li");
    thirdLi.classList.add("dropdown-item", "my-2");
    ul.append(thirdLi);

    const addListingButton = document.createElement("button");
    addListingButton.setAttribute("type", "button");
    addListingButton.setAttribute("data-bs-toggle", "modal");
    addListingButton.setAttribute("data-bs-target", "#new-listing-modal");
    addListingButton.classList.add(
      "nav-link",
      "d-flex",
      "justify-content-start",
      "align-items-center",
      "text-primary",
      "border-0",
      "bg-transparent"
    );
    thirdLi.append(addListingButton);

    const addIcon = document.createElement("span");
    addIcon.classList.add("material-symbols-outlined");
    addIcon.innerHTML = "add_box";
    addListingButton.append(addIcon);

    const addText = document.createElement("span");
    addText.classList.add("ms-2");
    addText.innerHTML = "New listing";
    addListingButton.append(addText);

    const lineBreak = document.createElement("hr");
    lineBreak.classList.add("table-group-divider");
    ul.append(lineBreak);

    const fourthLi = document.createElement("li");
    fourthLi.classList.add("dropdown-item", "my-2");
    ul.append(fourthLi);

    const logoutButton = document.createElement("button");
    logoutButton.setAttribute("type", "button");
    logoutButton.setAttribute("id", "logout-desktop");
    logoutButton.classList.add(
      "nav-link",
      "d-flex",
      "justify-content-start",
      "align-items-center",
      "text-primary",
      "border-0",
      "bg-transparent"
    );
    fourthLi.append(logoutButton);

    const logoutIcon = document.createElement("span");
    logoutIcon.classList.add("material-symbols-outlined");
    logoutIcon.innerHTML = "logout";
    logoutButton.append(logoutIcon);

    const logoutText = document.createElement("span");
    logoutText.classList.add("ms-2");
    logoutText.innerHTML = "Log out";
    logoutButton.append(logoutText);
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
