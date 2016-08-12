chrome.browserAction.onClicked.addListener(function(tab){
	chrome.extension.getBackgroundPage().console.log('clicked'); 
});