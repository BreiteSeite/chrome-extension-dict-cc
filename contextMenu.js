function clickTranslate(info, tab) {
    var selection = info.selectionText;
    
    chrome.tabs.create({
        "url": "http://www.dict.cc/?s=" + selection
   });
    
}

chrome.contextMenus.onClicked.addListener(clickTranslate);

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": "Translate %s on dict.cc",
        "contexts": ["selection"],
        "id": "translate"
    })
});