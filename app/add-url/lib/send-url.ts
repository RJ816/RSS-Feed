"use server";

import fetchRss from "../api/fetch-rss";
import storeJson from "./store-json";
import XmlParse from "./xml-parse";

export default async function SendUrl(formData: FormData) {
    let url = formData.get("url") as string;
    const rss = await fetchRss(url);
    const urlPath = "app/database/rss-urls.json";
    const jsonObj = XmlParse(url, rss);
    
    storeJson(urlPath, url, url);
    
  }