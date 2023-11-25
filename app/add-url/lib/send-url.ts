"use server";

import fetchRss from "../api/fetch-rss";
import storeUrl from "./store-url";
import XmlParse from "./xml-parse";

export default async function SendUrl(formData: FormData) {
    let url = formData.get("url") as string;
    const rss = await fetchRss(url);

    storeUrl(url);
    let text = XmlParse(rss);
  }