import { createContext, Dispatch, SetStateAction } from "react";
import Item from "./item-class";

interface FeedContextType {
  feedMap: Map<string, Item[]> | undefined;
  setFeedMap: Dispatch<SetStateAction<Map<string, Item[]> | undefined>>;
}

export const FeedContext = createContext<FeedContextType | undefined>(undefined);
