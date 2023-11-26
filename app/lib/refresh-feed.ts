"use server";

import fs from "fs";

export default async function RefreshFeed() {

    const filePath = "app/database/rss-items.json";
    // Read the existing content of the JSON file
    const existingContent = fs.existsSync(filePath)
        ? fs.readFileSync(filePath, "utf-8")
        : "{}";

    // Initialize existingObject as an empty object if the content is empty
    const existingObject = existingContent ? JSON.parse(existingContent) : {};

    // Extract array values for each key-value pair
    const allArrays = Object.values(existingObject);

    // Now, allArrays is an array containing all the arrays from existingObject
    console.log(allArrays);
}