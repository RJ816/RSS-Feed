import { createContext, Dispatch, SetStateAction } from "react";
import Item from "./item-class";

interface FeedContextType {
  feed: Item[] | undefined;
  setFeed: Dispatch<SetStateAction<Item[] | undefined>>;
}

export const FeedContext = createContext<FeedContextType | undefined>(undefined);

