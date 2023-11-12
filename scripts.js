document.getElementById("submit").addEventListener("click", storeUrl);

function storeUrl() {
    let url = document.getElementById("url").value;
    let key = extractSecondLevelDomain(url);
    localStorage.setItem(key, url);
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
