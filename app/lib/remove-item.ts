"use server";

import fs from "fs";
import util from "util";

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const rssItemsFilePath = "app/database/rss-items.json"; // Update with the correct path to your file

export const updateRssItemsJson = async (url: string | number, updatedItems: any) => {
  try {
    // Read the existing content of the JSON file
    const existingContent = await readFileAsync(rssItemsFilePath, "utf-8");

    // Parse the JSON content
    const existingObject = JSON.parse(existingContent);

    // Update the items for the specified URL
    existingObject[url] = updatedItems;

    // Convert the object back to JSON
    const updatedContent = JSON.stringify(existingObject, null, 2);

    // Write the updated content back to the file
    await writeFileAsync(rssItemsFilePath, updatedContent, "utf-8");
  } catch (error: any) {
    // Specify the type of error as Error
    throw new Error(`Error updating rss-items.json: ${error.message}`);
  }
};
