(function() {
    "use strict";

    //TODO: Hide if the default search engine is already google?
    //There's no listener methods available for browser.search so right now it would need to be loop based, which isn't great.
    browser.menus.create({
        id: "search-google",
        title: "Search &Google for \"%s\"",
        contexts: ["selection"]
    });

    browser.menus.onClicked.addListener((info, tab) => {
        if (info.menuItemId !== "search-google")
            return;

        let url = new URL("https://www.google.com/search");
        url.searchParams.set("q", info.selectionText);

        browser.tabs.create({
            url: url.href
        });
    });
}());