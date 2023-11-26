import fetchRss from "../api/fetch-rss";
import Item from "./item-class";
import parseXml from "./parse-xml";
import fs from "fs";
import storeJson from "./store-json";

export default async function addUpdates() {
    const currentRssItems = require('app/database/rss-items.json');
    const filePath = "app/database/rss-items.json";
    const rssTimestamp = require('app/database/rss-timestamp.json');

    for (const url in rssTimestamp) {
        const key = url;
        const timestamp = rssTimestamp[url];

        try {
            const rss = await fetchRss(key);
            const rssItems = parseXml(rss);
            const updatedItems = [];

            for (const newItem of rssItems) {
                // Check if the pubDate is present and is greater than the timestamp
                if (!newItem.pubDate || new Date(newItem.pubDate) >= timestamp) {
                updatedItems.push(new Item(newItem.title, newItem.link, newItem.pubDate, newItem.creator));
                } else {
                // Stop adding items if we encounter an older pubDate
                break;
                }
            }
            
            // Append updatedItems to the respective rss-items.json value
            const updatedRssItems = currentRssItems[key] || [];
            const newRssItems = [...updatedRssItems, ...updatedItems];

            storeJson(filePath, key, newRssItems);
            
        } catch (error) {
            console.error(`Error fetching RSS for ${url}: ${error}`);
        }
    
    }

  // TODO: Update the items based on your requirements.
}