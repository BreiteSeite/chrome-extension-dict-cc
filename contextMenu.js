chrome.contextMenus.onClicked.addListener(function (info, tab) {
    var selection = info.selectionText;

    chrome.tabs.create({
        "url": "http://www.dict.cc/?s=" + selection,
        "index": tab.index + 1,
        "openerTabId": tab.id
    });

});

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "title": chrome.i18n.getMessage("contextMenu", "%s"),
        "contexts": ["selection"],
        "id": "translate"
    })
});