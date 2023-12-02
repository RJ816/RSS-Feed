import parseAtom from "./parse-atom";
import parseRssVersion2 from "./parse-rss-2";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default function parseXml(text: string, timestamp: string) {
    const dom = new JSDOM(text, { contentType: "text/xml" });
    const xmlDoc = dom.window.document;

    const feedArray = [];

    // Check for different XML formats
    if (isRssVersion2(xmlDoc)) {
        feedArray.push(...parseRssVersion2(xmlDoc, timestamp));
    } else if (isAtom(xmlDoc)) {
        feedArray.push(...parseAtom(xmlDoc, timestamp));
    }

    return feedArray;
}

function isRssVersion2(xmlDoc: { querySelector: (arg0: string) => any; }) {
    const rssElement = xmlDoc.querySelector('rss');
    return rssElement && rssElement.getAttribute('version') === '2.0';
}

function isAtom(xmlDoc: { documentElement: any; }) {
    // Check if the root element has the 'xmlns' attribute with the Atom namespace value
    const rootElement = xmlDoc.documentElement;
    const xmlnsAttribute = rootElement.getAttribute('xmlns');

    return xmlnsAttribute === 'http://www.w3.org/2005/Atom';
}

