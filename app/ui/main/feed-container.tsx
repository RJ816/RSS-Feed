import React from "react";
import Item from "../../lib/item-class";

interface FeedContainerProps {
  feedMap: Map<string, Item[]> | undefined;
}

export default function FeedContainer({ feedMap }: FeedContainerProps) {
  const handleDeleteItem = (url: string, index: number) => {
    // Implement your logic to delete the item at the specified index for the given URL
    // Example: const updatedItems = ... (remove item at index from the array)
    // Then, update the feedMap with the updated items
  };
  console.log(feedMap);
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
                {/* Button to delete the item */}
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
