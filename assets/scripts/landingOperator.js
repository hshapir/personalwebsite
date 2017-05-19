/*
	Author: Harrison Shapiro, 2017
	This is all original script except for the code to detect Safari, which is courtesy of http://www.denisbouquet.com/javascript-targeting-safari-only/
*/
var startTime = new Date().getTime();
var wyoX = 690.0;
var wyoY=220.0;
var wyoLine = null;
var bosLine = null;
var nashLine = null;
var chlsLine = null;
var wyoButton = null;
var bosButton = null;
var chlsButton = null;
var nashButton = null;
var wyoLink = null;
var chiInfo = null;
var wyoInfo = null;
var bosInfo = null;
var nashInfo = null;
var chlsInfo = null;
var loopIterator = 0;
var wyoPopupIterator = 0.0;
var bosPopupIterator = 0.0;
var nashPopupIterator = 0.0;
var chlsPopupIterator = 0.0;
var mainInfoVisible = false;
var isSmall = false;
var redirectTime;

function runAnimation(){
	chiInfo = document.getElementById("chiInfoBox");
	wyoInfo = document.getElementById("wyoInfoBox");
	chlsInfo = document.getElementById("chlsInfoBox");
	nashInfo = document.getElementById("nashInfoBox");
	bosInfo = document.getElementById("bosInfoBox");
	wyoLine= document.getElementById('wyoLine');
	nashLine= document.getElementById('nashLine');
	bosLine= document.getElementById('bosLine');
	chlsLine= document.getElementById('chlsLine');
	bosButton= document.getElementById('bosButton');
	chlsButton= document.getElementById('chlsButton');
	nashButton= document.getElementById('nashButton');
	wyoButton = document.getElementById('wyoCircle');
	checkWinSize();
	window.addEventListener('resize', function(event){checkWinSize();});
	if(!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)){
		$(bosLine).css("animation", "animateBosLine 5s linear");
		$(nashLine).css("animation", "animateNashLine 5s linear");
		$(chlsLine).css("animation", "animateClsLine 5s linear");
		var bosButtonIterator=window.setTimeout(popUpBosButton, 4500);
		var chlsButtonIterator=window.setTimeout(popUpChlsButton, 1200);
		var nashButtonIterator=window.setTimeout(popUpNashButton, 2400);
		var makeInfoAppear=window.setTimeout(infoAppear, 7000);
		var wyoButtonIterator = window.setTimeout(moveWyoLine, 0);
	}else if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		wyoLink = document.getElementById("wyoLink");
		wyoButton.setAttribute("r", 7.0);
		nashButton.setAttribute("r", 7.0);
		bosButton.setAttribute("r", 7.0);
		chlsButton.setAttribute("r", 7.0);
		window.alert("Looks like you're on a mobile device!\nDue to weird computer stuff, animations are disabled.\nTap circles on the map to see cool info and link to new pages. Otherwise, just click the home button on the top right!");
	}else{
		wyoLink = document.getElementById("wyoLink");
		wyoButton.setAttribute("r", 7.0);
		nashButton.setAttribute("r", 7.0);
		bosButton.setAttribute("r", 7.0);
		chlsButton.setAttribute("r", 7.0);
		window.alert("Looks like you're using Safari!\nDue to Safari's lack of compatibility with Keyframes/JQuery, animations are disabled.\nIf you'd like to see some really cool animations, try opening this page in Chrome/Firefox!");
	}

}

function infoAppear(){
	var infoBox= document.getElementById("infoContainer");
	$(infoBox).css("visibility", "visible");
	$(infoBox).css("animation", "opacityIn 1.5s linear");
	mainInfoVisible = true;
}

function moveWyoLine(){
	wyoX -= 330/1000;
	wyoY -= 50/1000;
	wyoLine.setAttribute("d", "M690,220 A400,260 0 0,0 "+wyoX+","+wyoY);
	if(loopIterator< 1000){
		loopIterator++;
		var wyomingIterator=window.setTimeout(moveWyoLine, 5);
	}else{
		popUpWyoButton();
	}
}

function popUpWyoButton(){
	if(wyoPopupIterator < 100){
		wyoPopupIterator++;
		if(wyoPopupIterator<70){
			wyoButton.setAttribute("r", wyoPopupIterator*12.0/70.0);
		}else{
			wyoButton.setAttribute("r", 12.0-(wyoPopupIterator-70.0)*(5.0)/30.0);
		}
		var wyoButtonIterator=window.setTimeout(popUpWyoButton, .5);
	}
}

function popUpBosButton(){
	if(bosPopupIterator < 100){
		bosPopupIterator++;
		if(bosPopupIterator<70){
			bosButton.setAttribute("r", bosPopupIterator*12.0/70.0);
		}else{
			bosButton.setAttribute("r", 12.0-(bosPopupIterator-70.0)*(5.0)/30.0);
		}
		var bosButtonIterator=window.setTimeout(popUpBosButton, .5);
	}
}

function popUpNashButton(){
	if(nashPopupIterator < 100){
		nashPopupIterator++;
		if(nashPopupIterator<70){
			nashButton.setAttribute("r", nashPopupIterator*12.0/70.0);
		}else{
			nashButton.setAttribute("r", 12.0-(nashPopupIterator-70.0)*(5.0)/30.0);
		}
		var nashButtonIterator=window.setTimeout(popUpNashButton, .5);
	}
}

function popUpChlsButton(){
	if(chlsPopupIterator < 100){
		chlsPopupIterator++;
		if(chlsPopupIterator<70){
			chlsButton.setAttribute("r", chlsPopupIterator*12.0/70.0);
		}else{
			chlsButton.setAttribute("r", 12.0-(chlsPopupIterator-70.0)*(5.0)/30.0);
		}
		var chlsButtonIterator=window.setTimeout(popUpChlsButton, .5);
	}
}

function showChi(){
	chiButton = document.getElementById("chiColor");
	if(mainInfoVisible){
		var infoBox= document.getElementById("infoContainer");
		var hideDelay = window.setTimeout(function(){$(infoBox).css("visibility", "hidden");}, 1000);
		$(infoBox).css("animation", "opacityOut 1.0s linear");
		mainInfoVisible = false;
	}
	$(chiInfo).css("visibility", "visible");
	$(chiInfo).css("animation", "opacityIn 0.3s linear");
	chiButton.setAttribute("fill", "green");
	chiButton = document.getElementById("chiButton");
}
function hideChi(){
	chiButton = document.getElementById("chiColor");
	$(chiInfo).css("animation", "opacityOut 0.3s linear");
	var hideDelay = window.setTimeout(function(){
	$(chiInfo).css("visibility", "hidden");}, 300);
	chiButton.setAttribute("fill", "blue");
	chiButton = document.getElementById("chiButton");
}

function showWyo(){
	if(mainInfoVisible){
		var infoBox= document.getElementById("infoContainer");
		var hideDelay = window.setTimeout(function(){$(infoBox).css("visibility", "hidden");}, 1000);
		$(infoBox).css("animation", "opacityOut 1.0s linear");
		mainInfoVisible = false;
	}
	$(wyoInfo).css("visibility", "visible");
	$(wyoInfo).css("animation", "opacityIn 0.3s linear");
	wyoButton.setAttribute("fill", "green");
}
function hideWyo(){
	$(wyoInfo).css("animation", "opacityOut 0.3s linear");
	var hideDelay = window.setTimeout(function(){
	$(wyoInfo).css("visibility", "hidden");}, 300);
	wyoButton.setAttribute("fill", "blue");
}

function showBos(){
	if(mainInfoVisible){
		var infoBox= document.getElementById("infoContainer");
		var hideDelay = window.setTimeout(function(){$(infoBox).css("visibility", "hidden");}, 1000);
		$(infoBox).css("animation", "opacityOut 1.0s linear");
		mainInfoVisible = false;
	}
	$(bosInfo).css("visibility", "visible");
	$(bosInfo).css("animation", "opacityIn 0.3s linear");
	bosButton.setAttribute("fill", "green");
}
function hideBos(){
	$(bosInfo).css("animation", "opacityOut 0.3s linear");
	var hideDelay = window.setTimeout(function(){
	$(bosInfo).css("visibility", "hidden");}, 300);
	bosButton.setAttribute("fill", "blue");
}

function showChls(){
	if(mainInfoVisible){
		var infoBox= document.getElementById("infoContainer");
		var hideDelay = window.setTimeout(function(){$(infoBox).css("visibility", "hidden");}, 1000);
		$(infoBox).css("animation", "opacityOut 1.0s linear");
		mainInfoVisible = false;
	}
	$(chlsInfo).css("visibility", "visible");
	$(chlsInfo).css("animation", "opacityIn 0.3s linear");
	chlsButton.setAttribute("fill", "green");
}
function hideChls(){
	$(chlsInfo).css("animation", "opacityOut 0.3s linear");
	var hideDelay = window.setTimeout(function(){
	$(chlsInfo).css("visibility", "hidden");}, 300);
	chlsButton.setAttribute("fill", "blue");
}

function showNash(){
	if(mainInfoVisible){
		var infoBox= document.getElementById("infoContainer");
		var hideDelay = window.setTimeout(function(){$(infoBox).css("visibility", "hidden");}, 1000);
		$(infoBox).css("animation", "opacityOut 1.0s linear");
		mainInfoVisible = false;
	}
	$(nashInfo).css("visibility", "visible");
	$(nashInfo).css("animation", "opacityIn 0.3s linear");
	nashButton.setAttribute("fill", "green");
}
function hideNash(){
	$(nashInfo).css("animation", "opacityOut 0.3s linear");
	var hideDelay = window.setTimeout(function(){
	$(nashInfo).css("visibility", "hidden");}, 300);
	nashButton.setAttribute("fill", "blue");
}

function checkWinSize(){
	if(isSmall){
		if(window.innerWidth > 1000){
			isSmall = false;
			window.location="landing.html";
		}
	}else{
		if(window.innerWidth < 1000){
			isSmall = true;
			var redirector = window.setTimeout(resizeRedirector, 5000);
		}

	}
}

function resizeRedirector(){
	if(isSmall){
		window.location="main.html";
	}
}