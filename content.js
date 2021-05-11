$(document).ready(function(){
	setTimeout(function(){
		scrollToBottom();
	},5000)
})

function scrollToBottom(){
	$("html,body").animate({ scrollTop: 800 }, "slow");
	setTimeout(function(){
		clickCommentBox()
	},7000)
}

function clickCommentBox(){
	if($("#placeholder-area") !== null){

	$("#placeholder-area").trigger('click')
	addComment()
	}else{
		gotoNextVideo()
	}
}

function addComment(){
	$($("#contenteditable-root")[0]).text(`
		While watching youtube videos did you feel it would be great if you can discuss the video with someone in real time?

YT chat gives you the ability to chat and discuss with people around the world watching the same video in real time.
Checkout YT Chat Google Chrome extension.
https://chrome.google.com/webstore/detail/yt-chat/innmfeicjhbcbfpifdbdjphbigachckh`)
	setTimeout(function(){

	hitSubmitButton()
	},1500)
}

function hitSubmitButton(){
		var btn = document.getElementById("submit-button")
console.log($("#submit-button"))
		//btn.removeAttribute("disbaled")
		$("#submit-button")[0].removeAttribute("disabled")
		$("#submit-button").trigger("click")
		var clicks = localStorage.getItem("clicks")
		if(clicks){

		clicks = parseInt(clicks);
		clicks +=1;
		localStorage.setItem("clicks",clicks)
		}else{
		localStorage.setItem("clicks","1")

		}
		gotoNextVideo();

}

function gotoNextVideo(){
	setTimeout(function(){
		console.log("next")
		$('.ytd-thumbnail').click()
		refreshPage()
	},2000)
}

function refreshPage(){
	setTimeout(function(){

	scrollToBottom()
	},5500)
}