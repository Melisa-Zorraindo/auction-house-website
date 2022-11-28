import { loadFromStorage } from "../../storage/load.js";

const profile = loadFromStorage("profile");
const credits = loadFromStorage("credits");

export function renderNavbarDesktop() {
  const NAVBAR_DESKTOP_CONTAINER = document.querySelector("#desktopNavbar");

  if (profile) {
    //fetch profile picture from storage, or set a default if there isn't
    const avatar =
      profile.avatar || "src/assets/compressed-flamingo-avatar.jpg";
    const anchorHome = document.createElement("a");
    anchorHome.setAttribute("href", "index.html");
    anchorHome.classList.add("navbar-brand");
    NAVBAR_DESKTOP_CONTAINER.prepend(anchorHome);

    const logoImage = document.createElement("img");
    logoImage.setAttribute("src", "src/assets/logo.png");
    logoImage.setAttribute("alt", "logo");
    anchorHome.append(logoImage);

    const dataContainer = document.createElement("div");
    dataContainer.classList.add("d-flex", "gap-3");
    NAVBAR_DESKTOP_CONTAINER.append(dataContainer);

    const firstDatumButton = document.createElement("button");
    firstDatumButton.setAttribute("type", "button");
    firstDatumButton.setAttribute("data-bs-toggle", "modal");
    firstDatumButton.setAttribute("data-bs-target", "#new-listing-modal");
    firstDatumButton.classList.add(
      "d-flex",
      "flex-column",
      "align-items-center",
      "text-primary",
      "me-5",
      "border-0",
      "bg-transparent"
    );
    dataContainer.append(firstDatumButton);

    const addListingIcon = document.createElement("span");
    addListingIcon.classList.add("material-symbols-outlined");
    addListingIcon.innerHTML = "add_box";
    firstDatumButton.append(addListingIcon);

    const addListingText = document.createElement("span");
    addListingText.classList.add("fs-7");
    addListingText.innerHTML = "New listing";
    firstDatumButton.append(addListingText);

    const secondDatumContainer = document.createElement("div");
    secondDatumContainer.classList.add(
      "d-flex",
      "flex-column",
      "align-items-center",
      "text-primary",
      "me-5"
    );
    dataContainer.append(secondDatumContainer);

    const currencyIcon = document.createElement("span");
    currencyIcon.classList.add("material-symbols-outlined");
    currencyIcon.innerHTML = "currency_exchange";
    secondDatumContainer.append(currencyIcon);

    const currencyText = document.createElement("span");
    currencyText.classList.add("fs-7");
    currencyText.innerHTML = "NOK";
    secondDatumContainer.append(currencyText);

    const thirdDatumContainer = document.createElement("div");
    thirdDatumContainer.classList.add(
      "d-flex",
      "flex-column",
      "align-items-center",
      "text-primary",
      "me-5"
    );
    dataContainer.append(thirdDatumContainer);

    const paymentsIcon = document.createElement("span");
    paymentsIcon.classList.add("material-symbols-outlined");
    paymentsIcon.innerHTML = "payments";
    thirdDatumContainer.append(paymentsIcon);

    const paymentsText = document.createElement("span");
    paymentsText.classList.add("fs-7");
    paymentsText.innerHTML = `${credits} credits`;
    thirdDatumContainer.append(paymentsText);

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
    ul.append(firstLi);

    //THIS LINK ISN'T WORKING AT THE MOMENT
    const viewProfileAnchor = document.createElement("a");
    viewProfileAnchor.setAttribute("href", "profile.html");
    viewProfileAnchor.classList.add("dropdown-item", "d-flex", "my-2");
    viewProfileAnchor.innerHTML = "View profile";
    firstLi.append(viewProfileAnchor);

    const viewProfileIcon = document.createElement("span");
    viewProfileIcon.classList.add("material-symbols-outlined", "me-2");
    viewProfileIcon.innerHTML = "account_circle";
    viewProfileAnchor.prepend(viewProfileIcon);

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
