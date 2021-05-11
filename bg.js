
chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.create({url:"https://www.komkli.com/klimada-btu-nedir-btu-hesaplama-nasil-yapilir/"});
});


/*
var menuItem = {
    "id": "spendMoney",
    "title": "Spend Money",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){  

    if (clickData.menuItemId == "spendMoney" && clickData.selectionText)
	{
		console.log("yo");
	}
});
chrome.contextMenus.create({
    title: "Use URL of image somehow",
    contexts:["image"],
    onclick: function(info) {
        handleImageURL(info.srcUrl);
    }
});*/
