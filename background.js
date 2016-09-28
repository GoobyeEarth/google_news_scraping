chrome.browserAction.onClicked.addListener(function(tab){
	// chrome.extension.getBackgroundPage().console.log('clicked');
    loadHtml("setting.html");
});

function loadHtml(fileName){
    chrome.tabs.getAllInWindow(null, function(windows){
        chrome.tabs.create({ url: fileName });
    });
}