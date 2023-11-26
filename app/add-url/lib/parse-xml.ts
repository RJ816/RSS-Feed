import Item from "./item-class";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default function parseXml(url: string, text: string) {
    const dom = new JSDOM(text, { contentType: "text/xml" });
    const xmlDoc = dom.window.document;

    // Define namespace mapping for queries
    const namespaces = { 'dc': 'http://purl.org/dc/elements/1.1/' };

    const items = xmlDoc.querySelectorAll("item"); 
    const itemArray = Array.from(items).map((item: any) => {
        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";
        const pubDate = item.querySelector("pubDate")?.textContent || undefined;

        // Use namespace-aware query for dc:creator
        const creator = item.querySelector("dc\\:creator, creator")?.textContent || "";

        return new Item(title, link, pubDate, creator);
      });


    // Structure the result as a JSON object with the url as the key
    //const jsonObj: Record<string, Item[]> = { [url]: itemArray };
    
    //return jsonObj;
    return itemArray;
}