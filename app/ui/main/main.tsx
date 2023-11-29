"use client";

import { createContext, useState } from "react";
import FeedContainer from "./feed-container";
import Refresh from "./refresh";
import { FeedContext } from "../../lib/context";
import Item from "../../lib/item-class";

export default function Main() {
    const [feed, setFeed] = useState<Item[] | undefined>([]);
  
    return (
      <main>
        <FeedContext.Provider value={{ feed, setFeed }}>
          <Refresh />
          <FeedContainer feed={feed} />
        </FeedContext.Provider>
      </main>
    );
  }