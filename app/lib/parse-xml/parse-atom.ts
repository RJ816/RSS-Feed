import Item from "../item-class";
const jsdom = require("jsdom");

export default function parseAtom(xmlDoc:any, timestamp: string) {
    const entryArray = [];
    const entries = xmlDoc.querySelectorAll("entry"); 
    
    for (const entry of entries) {
        const pubDate = entry.querySelector("published")?.textContent || entry.querySelector("updated")?.textContent || undefined;

        // Stop parsing if pubDate is older than the given timestamp
        if (pubDate && new Date(pubDate) < new Date(timestamp)) {
            continue;
        }

        const title = entry.querySelector("title")?.textContent || "";
        const linkElement = entry.querySelector("link");
        const link = linkElement?.getAttribute("href") || linkElement?.textContent || "";

        entryArray.push(new Item(title, link, pubDate));
    }

    return entryArray;
}