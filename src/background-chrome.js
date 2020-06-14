(async function () {
    "use strict";

    chrome.contextMenus.create({
        id: "search-google",
        title: "Search &Google for \"%s\"",
        contexts: ["selection"]
    });

    chrome.contextMenus.onClicked.addListener(async (info, tab) => {
        if (info.menuItemId !== "search-google" || !info.selectionText)
            return;

        let url = new URL("https://www.google.com/search");
        url.searchParams.set("q", info.selectionText.trim());

        await chrome.tabs.create({
            url: url.href
        });
    });
}());