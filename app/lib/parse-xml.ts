import Item from "./item-class";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default function parseXml(text: string, timestamp: string) {
    const dom = new JSDOM(text, { contentType: "text/xml" });
    const xmlDoc = dom.window.document;

    // Define namespace mapping for queries
    const namespaces = { "dc": "http://purl.org/dc/elements/1.1/" };

    const items = xmlDoc.querySelectorAll("item"); 
    const itemArray = [];

    for (const item of items) {
        const pubDate = item.querySelector("pubDate")?.textContent || undefined;

        // Stop parsing if pubDate is older than the given timestamp
        if (pubDate && new Date(pubDate) < new Date(timestamp)) {
            break;
        }

        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";

        // Use namespace-aware query for dc:creator
        const creator = item.querySelector("dc\\:creator, creator")?.textContent || "";

        itemArray.push(new Item(title, link, pubDate, creator));
    }

    return itemArray;
}
