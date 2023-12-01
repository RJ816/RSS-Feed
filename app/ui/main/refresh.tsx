import { useContext, useState } from "react";
import RefreshFeed from "../../lib/refresh-feed";
import { FeedContext } from "../../lib/context";

export default function Refresh() {
  const feedContext = useContext(FeedContext);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);
      const updatedFeed = await RefreshFeed();
      feedContext?.setFeedMap(updatedFeed);
    } catch (error) {
      console.error("Error refreshing feed:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <button onClick={handleRefresh} disabled={isRefreshing}>
      {isRefreshing ? "Refreshing..." : "Refresh"}
    </button>
  );
}