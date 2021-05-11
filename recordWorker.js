    console.log("before update");
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    console.log("updated")
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{greeting:"hello"},function(response){

        });
    });
});

// navigator.mediaDevices.getUserMedia({  audio: true })
//   .then(stream => video.srcObject = stream)
//   .catch(e => log(e.name + ": "+ e.message));

// var log = msg => div.innerHTML += msg + "<br>";