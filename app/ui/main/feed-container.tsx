import React from "react";
import Item from "../../lib/item-class";

interface FeedContainerProps {
  feed: Item[] | undefined;
}

export default function FeedContainer({ feed }: FeedContainerProps) {
  return (
    <div id="feedContainer">
      {feed &&
        feed.map((item, index) => (
          <div key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </div>
        ))}
    </div>
  );
}