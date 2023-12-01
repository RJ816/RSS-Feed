"use client";

import React, { useEffect, useState } from "react";
import FeedContainer from "./feed-container";
import Refresh from "./refresh";
import { FeedContext } from "../../lib/context";
import Item from "../../lib/item-class";
import populateFeed from "../../lib/populate-feed"; 

export default function Main() {
  const [feedMap, setFeedMap] = useState<Map<string, Item[]> | undefined>(new Map());

  useEffect(() => {
    const fetchInitialFeed = async () => {
      try {
        const initialFeedData = await populateFeed();
        // Assuming populateFeed returns a Map
        setFeedMap(initialFeedData);
      } catch (error) {
        console.error("Error fetching initial feed data:", error);
      }
    };

    fetchInitialFeed();
  }, []);

  return (
    <main>
      <FeedContext.Provider value={{ feedMap, setFeedMap }}>
        <Refresh />
        <FeedContainer feedMap={feedMap} />
      </FeedContext.Provider>
    </main>
  );
}
