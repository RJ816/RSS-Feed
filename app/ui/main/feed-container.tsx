import React from "react";
import Item from "../../lib/item-class";

interface FeedContainerProps {
  feed: Map<string, Item[]> | undefined;
}

export default function FeedContainer({ feed }: FeedContainerProps) {
  return (
    <div id="feedContainer">
      {feed &&
        Array.from(feed.entries()).map(([url, items], urlIndex) => (
          <div key={urlIndex}>
            <h2>{url}</h2>
            {items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
