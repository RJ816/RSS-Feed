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
    let key = extractSecondLevelDomain(url);
    fetch(corsProxyUrl + url)
    .then(response => response.text())
    .then(xmlData => {localStorage.setItem(key, xmlData);});
}

function extractSecondLevelDomain(url) {
    const urlObj = new URL(url);
    let hostname = urlObj.hostname;
    const array = hostname.split('.');
    let secondLevelDomain = array[array.length - 2];
    return secondLevelDomain;
} 

function validateUrl(url) {
    if (url === "") {
        return false;
    } else {
        return true;
    }
}

function parseRss() {
    let text = localStorage.getItem("microsoft");
    const xmlParser = new DOMParser();
    let xmlRss = xmlParser.parseFromString(text,"text/xml");
    document.getElementById("test").innerHTML = text;
}