import fs from "fs";

export default function storeUrl(url: string) {
    const filePath = "app/database/rss-urls.json";

    // Read the existing content of the JSON file
    const existingContent = fs.existsSync(filePath)
        ? fs.readFileSync(filePath, "utf-8")
        : "{}";

    // Initialize existingObject as an empty object if the content is empty
    const existingObject = existingContent ? JSON.parse(existingContent) : {};

    // Create a Map from the object
    const urlMap = new Map(Object.entries(existingObject));

    // Add the new URL to the Map
    urlMap.set(url, url);

    // If you want to convert the Map back to an object and save it to the file:
    const updatedObject = Object.fromEntries(urlMap.entries());
    const updatedJsonString = JSON.stringify(updatedObject, null, 2);

    // Remove the leading newline from the JSON string
    const trimmedJsonString = updatedJsonString.replace(/^\s*\n/, "");

    fs.writeFileSync(filePath, trimmedJsonString);
}

