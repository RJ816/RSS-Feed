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

    // Flatten the arrays into a single array of items
    const allItems = Object.values(existingObject).flat();
    //console.log(allItems); TODO
    return allItems;
}