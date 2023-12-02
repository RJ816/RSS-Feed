"use server";

import fs from "fs";
import Item from "./item-class";

export default async function populateFeed() {
    const filePath = "app/database/rss-items.json";
    // Read the existing content of the JSON file
    const existingContent = fs.existsSync(filePath)
        ? fs.readFileSync(filePath, "utf-8")
        : "{}";
        
    // Initialize existingObject as an empty object if the content is empty
    const existingObject: Record<string, Item[]> = existingContent ? JSON.parse(existingContent) : {};

    // Create a Map to store URLs as keys and their respective items as values
    const allItems = new Map<string, Item[]>();

    // Iterate through each URL and its items in the existingObject
    for (const [url, items] of Object.entries(existingObject)) {
        allItems.set(url, items);
    }

    return allItems;
}

