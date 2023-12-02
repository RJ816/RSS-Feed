"use server";

import fetchRss from "../api/fetch-rss";
import getTimestamp from "./get-timestamp";
import Item from "./item-class";
import parseXml from "./parse-xml/parse-xml";
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
            const rssItems = parseXml(rss,timestamp);
            const updatedItems = [];
            for (const newItem of rssItems) {
                updatedItems.push(new Item(newItem.title, newItem.link, newItem.pubDate, newItem.creator));
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