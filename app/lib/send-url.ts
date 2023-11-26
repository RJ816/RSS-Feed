"use server";

import fetchRss from "../api/fetch-rss";
import storeJson from "./store-json";
import parseXml from "./parse-xml";
import getTimestamp from "./get-timestamp";

export default async function SendUrl(formData: FormData) {
    let url = formData.get("url") as string;
    const rss = await fetchRss(url);
    let urlPath = "app/database/rss-urls.json";
    let rssPath = "app/database/rss-items.json";
    let timestampPath = "app/database/rss-timestamp.json";
    let rssItems = parseXml(url, rss);
    let timestamp = getTimestamp();
    
    storeJson(urlPath, url, url);
    storeJson(rssPath, url, rssItems);
    storeJson(timestampPath, url, timestamp);
  }