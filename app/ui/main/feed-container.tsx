import React from "react";
import Item from "../../lib/feed-item-class";
import { updateRssItemsJson } from "../../lib/remove-item"; // Import your function

interface FeedContainerProps {
  feedMap: Map<string, Item[]> | undefined;
  setFeedMap: React.Dispatch<React.SetStateAction<Map<string, Item[]> | undefined>>;
}

export default function FeedContainer({ feedMap, setFeedMap }: FeedContainerProps) {
  const handleDeleteItem = (url: string, index: number) => {
    if (feedMap) {
      // Clone the map to make modifications
      const updatedFeedMap = new Map(feedMap);

      // Remove the item from the array
      const updatedItems = [...updatedFeedMap.get(url) || []];
      updatedItems.splice(index, 1);

      // Update the map with the new items array
      updatedFeedMap.set(url, updatedItems);

      // Update the UI
      setFeedMap(updatedFeedMap);

      // Call the function to remove the item from rss-items.json
      removeItemFromJson(url, updatedItems);
    }
  };

  const removeItemFromJson = async (url: string, updatedItems: Item[]) => {
    try {
      await updateRssItemsJson(url, updatedItems);
      // Optionally, you can fetch the updated data and set the state again
      // const updatedData = await populateFeed();
      // setFeedMap(updatedData);
    } catch (error) {
      console.error("Error updating rss-items.json:", error);
    }
  };

  return (
    <div id="feedContainer">
      {feedMap &&
        Array.from(feedMap.entries()).map(([url, items], urlIndex) => (
          <div key={urlIndex}>
            {items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
                <button onClick={() => handleDeleteItem(url, itemIndex)}>
                  X
                </button>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
