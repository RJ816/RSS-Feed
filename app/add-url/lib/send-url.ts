"use server";

import storeUrl from "./store-url";

export default async function SendUrl(formData: FormData) {
    let url = formData.get("url") as string;
    storeUrl(url);
    // mutate data
    // revalidate cache
  }