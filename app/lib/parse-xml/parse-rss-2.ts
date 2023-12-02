import Item from "../item-class";
const jsdom = require("jsdom");

export default function parseRssVersion2(xmlDoc:any, timestamp: string) {
    const itemArray = [];
    const items = xmlDoc.querySelectorAll("item"); 
    
    for (const item of items) {
        const pubDate = item.querySelector("pubDate")?.textContent || undefined;

        // Stop parsing if pubDate is older than the given timestamp
        if (pubDate && new Date(pubDate) < new Date(timestamp)) {
            continue;
        }

        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";

        // Use namespace-aware query for dc:creator
        const creator = item.querySelector("dc\\:creator, creator")?.textContent || "";

        itemArray.push(new Item(title, link, pubDate, creator));
    }

    return itemArray;
}