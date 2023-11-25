import fs from "fs";

export default function storeUrl(url: string) {
    const filePath = "app/database/rss-urls.json";

    // Read the existing content of the JSON file, or initialize an empty array
    const existingContent = fs.existsSync(filePath)
        ? fs.readFileSync(filePath, 'utf-8')
        : '[]';

    // Parse the existing content into an array
    const existingArray = JSON.parse(existingContent);

    // Convert the array to a Set for easy checking of uniqueness
    const urlSet = new Set(existingArray);

    // Check if the URL already exists in the Set
    if (!urlSet.has(url)) {
        // Add the new URL to the Set
        urlSet.add(url);

        // Convert the Set back to an array
        const updatedArray = Array.from(urlSet);

        // Convert the updated array to a JSON-formatted string
        const updatedJsonString = JSON.stringify(updatedArray);

        // Write the updated JSON string back to the file
        fs.writeFileSync(filePath, updatedJsonString);
    } else {
        console.log("URL already exists in the JSON file.");
    }
}
