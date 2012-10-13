function clickTranslate(info, tab) {
    var selection = info.selectionText;
    
    chrome.tabs.create({
        "url": "http://www.dict.cc/?s=" + selection
   });
    
}

chrome.contextMenus.onClicked.addListener(clickTranslate);

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": chrome.i18n.getMessage("contextMenu", "%s"),
        "contexts": ["selection"],
        "id": "translate"
    })
});