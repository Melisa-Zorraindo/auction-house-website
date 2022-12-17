/**
 * Displays message after sign up
 * process is successfully completed
 * and redirects the user to the log in page
 */
export function handleSubmission() {
  const USER_FEEDBACK = document.querySelector("#feedback");
  USER_FEEDBACK.classList.remove("d-none");
  USER_FEEDBACK.classList.add("bg-success");
  USER_FEEDBACK.classList.add("text-light");
  USER_FEEDBACK.innerHTML =
    "Welcome to Biddable! You'll be redirected to the log in page in 3 seconds";

  setTimeout(() => {
    window.location.assign("./profile-login.html");
  }, 3000);
}
