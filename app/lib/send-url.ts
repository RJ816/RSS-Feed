"use server";

import fetchRss from "../api/fetch-rss";
import storeJson from "./store-json";
import parseXml from "./parse-xml";
import getTimestamp from "./get-timestamp";

export default async function SendUrl(formData: FormData) {
    const url = formData.get("url") as string;
    const rss = await fetchRss(url);
    const rssPath = "app/database/rss-items.json";
    const timestampPath = "app/database/rss-timestamp.json";
    const timestamp = getTimestamp();
    let rssItems = parseXml(rss, timestamp);
    
    storeJson(rssPath, url, rssItems);
    storeJson(timestampPath, url, timestamp);
  }