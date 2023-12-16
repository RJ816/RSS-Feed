export default async function fetchRss(url: string) {
  const noCacheHeaders = new Headers({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  });

  const noCacheUrl = `${url}?_=${new Date().getTime()}`;
  const res = await fetch(noCacheUrl, { headers: noCacheHeaders });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.text();
}
