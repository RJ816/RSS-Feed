import { createContext, Dispatch, SetStateAction } from "react";
import Item from "./item-class";

interface FeedContextType {
  feed: Map<string, Item[]> | undefined; // Update the type to Map<string, Item[]>
  setFeed: Dispatch<SetStateAction<Map<string, Item[]> | undefined>>; // Update the type
}

export const FeedContext = createContext<FeedContextType | undefined>(undefined);
