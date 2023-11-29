import addUpdates from "./add-updates";
import populateFeed from "./populate-feed";

export default async function RefreshFeed() { 
    await addUpdates();
    return await populateFeed();
}