import Item from "../feed-item-class";
const jsdom = require("jsdom");

export default function parseAtom(xmlDoc:any, timestamp: string) {
    const itemArray = [];
    const items = xmlDoc.querySelectorAll("entry"); 
    
    for (const item of items) {
        const pubDate = item.querySelector("published")?.textContent || undefined;

        // Stop parsing if pubDate is older than the given timestamp
        if (pubDate && new Date(pubDate) < new Date(timestamp)) {
            continue;
        }

        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";

        itemArray.push(new Item(title, link, pubDate));
    }

    return itemArray;
}