"use server";

import fetchRss from "../api/fetch-rss";
import storeJson from "./store-json";
import parseXml from "./parse-xml/parse-xml";
import getTimestamp from "./get-timestamp";
import FeedCutoff from "./feed-cutoff";

export default async function SendUrl(formData: FormData) {
    const url = formData.get("url") as string;
    const rss = await fetchRss(url);
    const rssPath = "app/database/rss-items.json";
    const timestampPath = "app/database/rss-timestamp.json";
    const timestamp = getTimestamp();
    const feedCutoff = FeedCutoff();
    let rssItems = parseXml(rss, feedCutoff);

    storeJson(rssPath, url, rssItems);
    storeJson(timestampPath, url, timestamp);
  }