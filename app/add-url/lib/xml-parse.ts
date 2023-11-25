export default function XmlParse(text: string) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text,"text/xml");
    const items = xmlDoc.querySelectorAll("item");
    
}