export default async function fetchRss(url: string) {
  const noCacheHeaders = new Headers({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  });

  const res = await fetch(url, { headers: noCacheHeaders });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.text();
}
  