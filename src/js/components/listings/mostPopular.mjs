import { fetchListings } from "../../api/feed/read.mjs";

export async function sortByMostPopular() {
  const ALL_ITEMS = await fetchListings();

  return ALL_ITEMS.sort((a, b) => b._count.bids - a._count.bids);
}
