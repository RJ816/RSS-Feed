import fs from "fs";
import Item from "./item-class";

export default function storeJson(filePath: string, key: string, value: string | Item[]) {

    // Read the existing content of the JSON file
    const existingContent = fs.existsSync(filePath)
        ? fs.readFileSync(filePath, "utf-8")
        : "{}";

    // Initialize existingObject as an empty object if the content is empty
    const existingObject = existingContent ? JSON.parse(existingContent) : {};

    // Create a Map from the object
    const valueMap = new Map(Object.entries(existingObject));

    // Add the new URL to the Map
    valueMap.set(key, value);

    // If you want to convert the Map back to an object and save it to the file:
    const updatedObject = Object.fromEntries(valueMap.entries());
    const updatedJsonString = JSON.stringify(updatedObject, null, 2);

    // Remove the leading newline from the JSON string
    const trimmedJsonString = updatedJsonString.replace(/^\s*\n/, "");

    fs.writeFileSync(filePath, trimmedJsonString);
}

