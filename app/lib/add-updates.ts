"use server";

import fetchRss from "../api/fetch-rss";
import getTimestamp from "./get-timestamp";
import Item from "./item-class";
import parseXml from "./parse-xml";
import storeJson from "./store-json";

export default async function addUpdates() {
    const currentRssItems = require("app/database/rss-items.json");
    const rssPath = "app/database/rss-items.json";
    const rssTimestamp = require("app/database/rss-timestamp.json");
    const timePath = "app/database/rss-timestamp.json";

    for (const url in rssTimestamp) {
        const key = url;
        let timestamp = rssTimestamp[url];

        try {
            const rss = await fetchRss(key);
            const rssItems = parseXml(rss);
            const updatedItems = [];

            //console.log(rssItems);

            for (const newItem of rssItems) {
                // Check if the pubDate is present and is greater than the timestamp
                if (!newItem.pubDate || new Date(newItem.pubDate) >= new Date(timestamp)) {
                updatedItems.push(new Item(newItem.title, newItem.link, newItem.pubDate, newItem.creator));
                } else {
                // Stop adding items if we encounter an older pubDate
                break;
                }
            }
            
            // Append updatedItems to the respective rss-items.json value
            const updatedRssItems = currentRssItems[key] || [];
            const newRssItems = [...updatedRssItems, ...updatedItems];
            storeJson(rssPath, key, newRssItems);
            timestamp = getTimestamp();
            storeJson(timePath, key, timestamp);
            
            
        } catch (error) {
            console.error(`Error fetching RSS for ${url}: ${error}`);
        }
    
    }
}