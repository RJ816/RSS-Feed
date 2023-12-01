"use client";
import React, { useEffect, useState } from "react";
import FeedContainer from "./feed-container";
import Refresh from "./refresh";
import { FeedContext } from "../../lib/context";
import Item from "../../lib/item-class";
import populateFeed from "../../lib/populate-feed"; 

export default function Main() {
  const [feed, setFeed] = useState<Map<string, Item[]> | undefined>(new Map());

  useEffect(() => {
    const fetchInitialFeed = async () => {
      try {
        const initialFeedData = await populateFeed();
        setFeed(initialFeedData);
      } catch (error) {
        console.error("Error fetching initial feed data:", error);
      }
    };

    fetchInitialFeed();
  }, []);

  return (
    <main>
      <FeedContext.Provider value={{ feed, setFeed }}>
        <Refresh />
        {/* Adjust FeedContainer to handle Map<string, Item[]> */}
        <FeedContainer feed={feed} />
      </FeedContext.Provider>
    </main>
  );
}
