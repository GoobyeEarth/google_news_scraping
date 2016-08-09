
var count = 0;

setInterval("hoge()", 1000);

function hoge(){
	chrome.extension.getBackgroundPage().console.log('foo');
	count++;	
}
