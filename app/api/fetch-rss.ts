export default async function fetchRss(url : string) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.text();
  }