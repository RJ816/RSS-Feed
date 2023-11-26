"use server";

import fetchRss from "../api/fetch-rss";
import storeJson from "./store-json";
import parseXml from "./parse-xml";
import getTimestamp from "./get-timestamp";

export default async function SendUrl(formData: FormData) {
    let url = formData.get("url") as string;
    const rss = await fetchRss(url);
    let rssPath = "app/database/rss-items.json";
    let timestampPath = "app/database/rss-timestamp.json";
    let rssItems = parseXml(rss);
    let timestamp = getTimestamp();
    
    storeJson(rssPath, url, rssItems);
    storeJson(timestampPath, url, timestamp);
  }