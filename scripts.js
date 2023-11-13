document.getElementById("submit").addEventListener("click", processRss);

function processRss() {
    storeUrl();
    parseRss();
}

function storeUrl() {
    let url = document.getElementById("url").value;
    if (validateUrl(url)) {
        let storedUrls = localStorage.getItem("urlArray");
        let urlArray = storedUrls ? JSON.parse(storedUrls) : [];
        urlArray.push(url);
        urlArray = Array.from(new Set(urlArray));
        localStorage.setItem("_urlArray", JSON.stringify(urlArray));
        fetchRss(url);
    } else {
        console.log("invalid url");
    }
}

function fetchRss(url) {
    const corsProxyUrl = "https://cors-anywhere.herokuapp.com/"; //TODO remove
    let key = url;
    fetch(corsProxyUrl + url)
    .then(response => response.text())
    .then(xmlData => {localStorage.setItem(key, xmlData);});
}

// function extractSecondLevelDomain(url) {
//     const urlObj = new URL(url);
//     let hostname = urlObj.hostname;
//     const array = hostname.split('.');
//     let secondLevelDomain = array[array.length - 2];
//     return secondLevelDomain;
// } 

function validateUrl(url) {
    if (url === "") {
        return false;
    } else {
        return true;
    }
}

function parseRss() {
    let text = localStorage.getItem("https://calendar.gatech.edu/event-calendar-day.xml");
    const xmlParser = new DOMParser();
    let xmlObj = xmlParser.parseFromString(text,"text/xml");
    let title = xmlObj.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    let link = xmlObj.getElementsByTagName("link")[0].childNodes[0].nodeValue;
    let description = xmlObj.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    const channelObj = new RssDom(title, link, description);
    let feedContainer = document.getElementById("feedContainer");
    let titleElement = document.createElement("div");
    let linkElement = document.createElement("div");
    let descriptionElement = document.createElement("div");
    titleElement.innerHTML = channelObj.getChannelTitle();
    linkElement.innerHTML = channelObj.getChannelLink();
    descriptionElement.innerHTML = channelObj.getChannelDescription();
    feedContainer.appendChild(titleElement);
    feedContainer.appendChild(linkElement);
    feedContainer.appendChild(descriptionElement);
}

class RssDom {
    constructor (channelTitle, channelLink, channelDescription) {
        this.channelTitle = channelTitle;
        this.channelLink = channelLink;
        this.channelDescription = channelDescription;
    }
    getChannelTitle() {return this.channelTitle};
    getChannelLink() {return this.channelLink};
    getChannelDescription() {return this.channelDescription};
}