/**
 * Displays an error
 */
export function displayApiError(container, apiError) {
  const USER_FEEDBACK = container;
  USER_FEEDBACK.classList.remove("d-none");
  USER_FEEDBACK.classList.add("bg-danger");
  USER_FEEDBACK.classList.add("text-light");
  USER_FEEDBACK.innerHTML = `An error occurred. Please try again later.</br> Error type: ${apiError}`;
}
