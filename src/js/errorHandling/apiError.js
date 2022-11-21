export function displayApiError() {
  const USER_FEEDBACK = document.querySelector("#user-feedback");
  USER_FEEDBACK.classList.remove("d-none");
  USER_FEEDBACK.classList.add("bg-danger");
  USER_FEEDBACK.classList.add("text-light");
  USER_FEEDBACK.innerHTML = "An error occurred. Please try again later";
}
