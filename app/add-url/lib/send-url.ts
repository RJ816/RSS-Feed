"use server";

import fetchRss from "../api/fetch-rss";
import storeJson from "./store-json";
import parseXml from "./parse-xml";

export default async function SendUrl(formData: FormData) {
    let url = formData.get("url") as string;
    const rss = await fetchRss(url);
    const urlPath = "app/database/rss-urls.json";
    const rssPath = "app/database/rss-items.json";
    const rssItems = parseXml(url, rss);
    
    storeJson(urlPath, url, url);
    storeJson(rssPath, url, rssItems);
    
  }