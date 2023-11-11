function addUrl(url) {
    //TODO create Validation function
    if (url != undefined) {
        localStorage.setItem("test", url);
    }
    document.getElementById().innerHTML = localStorage.getItem("test");
}

