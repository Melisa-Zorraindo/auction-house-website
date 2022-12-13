/**
 * Displays a message to the user,
 * can be an error, a warning, a success message, etc.
 * @param {HTMLDivElement} container where the message will live
 * @param {string} title that will be displayed to the user
 * @param {string} message that will be displayed to the user
 * @param {string} type Bootstrap class to style the message
 */
export function displayFeedback(container, title, message, type) {
  container.classList.remove("d-none");
  container.children[0].innerHTML = title;
  container.children[1].innerHTML = message;
  container.classList.add(`alert-${type}`);
}
