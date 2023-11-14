document.addEventListener("DOMContentLoaded", updateFeed);
document.getElementById("submit").addEventListener("click", processRss);

function updateFeed() {
    updateStorageRssValues();
    displayFeed();
}

function displayFeed() {
    test();
}

function test() {
    let text = localStorage.getItem("https://calendar.gatech.edu/taxonomy/term/13/feed");
    const xmlParser = new DOMParser();
    const xmlDoc = xmlParser.parseFromString(text,"text/xml");
    const feedContainer = document.getElementById("feedContainer");
    const items = xmlDoc.querySelectorAll("item");

    items.forEach(item => {
        const title = item.querySelector("title").textContent;
        const link = item.querySelector("link").textContent;
        const titleElement = document.createElement("div");
        const linkElement = document.createElement("div");

        titleElement.innerHTML = title;
        linkElement.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
        feedContainer.appendChild(titleElement);
        feedContainer.appendChild(linkElement);
    });
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

// local-storage-helper.js
function checkLocalStorageSupport() {
    if (typeof(Storage) == "undefined") {
        console.log("local storage not supported.");
    } else {return true};
}

function updateStorageRssValues() {
    if (checkLocalStorageSupport()) {
        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.startsWith("_")) {continue;}
            fetchRss(key);
        }
    }
}

function diffUpdatedRssItems(key) {
    let prevState = localStorage.getItem(key);
    let currentState = fetchRss(key);
    const addedItems = new Set([...currentState].filter(item => !prevState.has(item)));
}
// local-storage-helper.js

//network-helper.js
function fetchRss(url) {
    const corsProxyUrl = "https://cors-anywhere.herokuapp.com/"; //TODO remove
    let key = url;
    fetch(corsProxyUrl + url)
    .then(response => response.text())
    //.then(xmlData => {localStorage.setItem(key, xmlData);});
    .then(xmlData => {return xmlData;});
}
//network-helper.js

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



function validateUrl(url) {
    if (url === "") {
        return false;
    } else {
        return true;
    }
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