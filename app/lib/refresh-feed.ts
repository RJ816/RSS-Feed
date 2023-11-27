import addUpdates from "./add-updates";
import populateFeed from "./populate-feed";

export default async function RefreshFeed() {
    addUpdates();
    populateFeed();
}