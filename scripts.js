document.getElementById("submit").addEventListener("click", storeUrl);

function storeUrl() {
    let url = document.getElementById("url").value;
    let storedUrls = localStorage.getItem("urlArray");
    let urlArray = storedUrls ? JSON.parse(storedUrls) : [];
    urlArray.push(url);
    urlArray = Array.from(new Set(urlArray));
    localStorage.setItem("urlArray", JSON.stringify(urlArray));
    fetchRss(url);
}

function extractSecondLevelDomain(url) {
    const urlObj = new URL(url);
    let hostname = urlObj.hostname;
    const array = hostname.split('.');
    let secondLevelDomain = array[array.length - 2];
    return secondLevelDomain;
} 

function fetchRss(url) {
    const corsProxyUrl = "https://cors-anywhere.herokuapp.com/"; //TODO remove
    fetch(corsProxyUrl + url)
    .then(response => response.text())
    .then(xmlData => {localStorage.setItem("test", xmlData);});
}
