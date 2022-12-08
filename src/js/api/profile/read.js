import { API_AUCTION_URL } from "../constants.js";

/**
 * Sends a GET request to API
 * to fetch a single profile
 * @param {string} accessToken that grants permissions to API
 * @param {string} name user's name
 * @returns item that matches user's name
 */
export async function fetchSingleProfile(accessToken, name) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(`${API_AUCTION_URL}profiles/${name}`, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
