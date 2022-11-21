export function handleSubmission() {
  const USER_FEEDBACK = document.querySelector("#user-feedback");
  USER_FEEDBACK.classList.remove("d-none");
  USER_FEEDBACK.classList.add("bg-success");
  USER_FEEDBACK.classList.add("text-light");
  USER_FEEDBACK.innerHTML =
    "Welcome to Biddable! You'll be redirected to the log in page in 5 seconds";

  setTimeout(() => {
    window.location.assign("../../../profile/login");
  }, 5000);
}
