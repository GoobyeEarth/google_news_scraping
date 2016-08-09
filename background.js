var imgurl = "https://www.google.com/search?hl=ja&gl=jp&tbm=nws&authuser=0&q=%E6%97%A5%E9%8A%80&oq=%E6%97%A5%E9%8A%80&gs_l=news-cc.3..43j0l6j43i53.604683.607470.0.607765.15.10.2.3.0.0.236.1094.3j6j1.10.0...0.0...1ac.1j4.I-eLMJhKkFM";
    chrome.downloads.download({url:imgurl, filename:"test/test.html"},function(downloadId){
        console.log("download begin, the downId is:" + downloadId);
    });