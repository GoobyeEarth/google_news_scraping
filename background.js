
var count = 0;

setInterval(function(){
	hoge();
}, 1000);

function hoge(){
	chrome.extension.getBackgroundPage().console.log('foo' + count);
	count++;	
}
