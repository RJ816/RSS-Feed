import Item from "./item-class";

export default function XmlParse(url: string, text: string) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text,"text/xml");
    const items = xmlDoc.querySelectorAll("item"); 
    const itemArray = Array.from(items).map((item) => {
        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";
        const pubDate = item.querySelector("pubDate")?.textContent || undefined;
        return new Item(title, link, pubDate);
      });   
    // Structure the result as a JSON object with the url as the key
    const jsonObj: Record<string, Item[]> = { [url]: itemArray };
    
    return jsonObj;
}