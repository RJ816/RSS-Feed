import storeUrl from "../lib/store-url";

export async function POST(request: Request) {
  // const formData = await request.formData();
  // const url = formData.get("url") as string;
  // storeUrl(url);
  // return Response.json({ url})

    const res = await request.json()
    return Response.json({ res })
  
  }