import { editProfile } from "../api/profile/editProfile.js";
import { loadFromStorage } from "../storage/load.js";

export async function selectAvatar() {
  const profile = loadFromStorage("profile");

  if (profile) {
    const { name, email } = profile;
    const accessToken = loadFromStorage("accessToken");

    const EDIT_AVATAR_FORM = document.querySelector("form#edit-avatar");
    const AVATAR_FIELD = document.querySelector("input#avatar-url");

    const EMAIL_FIELD = document.querySelector("input#user-email");
    const USERNAME_FIELD = document.querySelector("input#username");

    EMAIL_FIELD.setAttribute("placeholder", `${email}`);
    USERNAME_FIELD.setAttribute("placeholder", `${name}`);

    //premade avatar buttons
    const GIRL_AVATAR = document.querySelector("#girl-avatar");
    const GUY_AVATAR = document.querySelector("#guy-avatar");
    const SQUIRREL_AVATAR = document.querySelector("#squirrel-avatar");
    const FLAMINGO_AVATAR = document.querySelector("#flamingo-avatar");

    GIRL_AVATAR.addEventListener("click", () => {
      AVATAR_FIELD.value =
        "https://live.staticflickr.com/65535/52514244720_54ed1f39e0_b.jpg";
    });

    GUY_AVATAR.addEventListener("click", () => {
      AVATAR_FIELD.value =
        "https://live.staticflickr.com/65535/52525670252_43f95ea832_b.jpg";
    });

    SQUIRREL_AVATAR.addEventListener("click", () => {
      AVATAR_FIELD.value =
        "https://live.staticflickr.com/65535/52526620395_4203a2e08e_z.jpg";
    });

    FLAMINGO_AVATAR.addEventListener("click", () => {
      AVATAR_FIELD.value =
        "https://live.staticflickr.com/65535/52526140146_618b37cf84_b.jpg";
    });

    EDIT_AVATAR_FORM.addEventListener("submit", (event) => {
      event.preventDefault();
      editProfile(accessToken, AVATAR_FIELD.value, name);
    });
  }
}
