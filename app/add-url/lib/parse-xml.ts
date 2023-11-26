import Item from "./item-class";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default function parseXml(url: string, text: string) {
    const dom = new JSDOM(text, { contentType: "text/xml" });
    const xmlDoc = dom.window.document;
    const items = xmlDoc.querySelectorAll("item"); 
    const itemArray = Array.from(items).map((item: any) => {
        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";
        const pubDate = item.querySelector("pubDate")?.textContent || undefined;
        return new Item(title, link, pubDate);
      });
    // Structure the result as a JSON object with the url as the key
    const jsonObj: Record<string, Item[]> = { [url]: itemArray };
    
    return jsonObj;
}