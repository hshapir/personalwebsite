var startTime = new Date().getTime();
var wyoX = 690.0;
var wyoY=160.0;
var wyoLine = null;
var wyoButton = null;
var bosButton = null;
var chlsButton = null;
var nashButton = null;
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

function runAnimation(){
	chiInfo = document.getElementById("chiInfoBox");
	wyoInfo = document.getElementById("wyoInfoBox");
	chlsInfo = document.getElementById("chlsInfoBox");
	nashInfo = document.getElementById("nashInfoBox");
	bosInfo = document.getElementById("bosInfoBox");
	wyoLine= document.getElementById('wyoLine');
	bosButton= document.getElementById('bosButton');
	chlsButton= document.getElementById('chlsButton');
	nashButton= document.getElementById('nashButton');
	var bosButtonIterator=window.setTimeout(popUpBosButton, 4500);
	var chlsButtonIterator=window.setTimeout(popUpChlsButton, 1200);
	var nashButtonIterator=window.setTimeout(popUpNashButton, 2400);
	var makeInfoAppear=window.setTimeout(infoAppear, 7000);
	var wyoButtonIterator = window.setTimeout(moveWyoLine, 0);
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
	wyoLine.setAttribute("d", "M690,160 A400,200 0 0,0 "+wyoX+","+wyoY);
	if(loopIterator< 1000){
		loopIterator++;
		var wyomingIterator=window.setTimeout(moveWyoLine, 5);
	}else{
		popUpWyoButton();
	}
}

function popUpWyoButton(){
	wyoButton = document.getElementById("wyoCircle");
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
	wyoButton = document.getElementById("wyoCircle");
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

function popUpWyoButton(){
	wyoButton = document.getElementById("wyoCircle");
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

function popUpWyoButton(){
	wyoButton = document.getElementById("wyoCircle");
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
	if(mainInfoVisible){
		var infoBox= document.getElementById("infoContainer");
		var hideDelay = window.setTimeout(function(){$(infoBox).css("visibility", "hidden");}, 1000);
		$(infoBox).css("animation", "opacityOut 1.0s linear");
		mainInfoVisible = false;
	}
	$(chiInfo).css("visibility", "visible");
	$(chiInfo).css("animation", "opacityIn 0.3s linear");
}
function hideChi(){
	$(chiInfo).css("animation", "opacityOut 0.3s linear");
	var hideDelay = window.setTimeout(function(){
		$(chiInfo).css("visibility", "hidden");}, 300);
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
}
function hideWyo(){
	$(wyoInfo).css("animation", "opacityOut 0.3s linear");
	var hideDelay = window.setTimeout(function(){
		$(wyoInfo).css("visibility", "hidden");}, 300);
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
}
function hideBos(){
	$(bosInfo).css("animation", "opacityOut 0.3s linear");
	var hideDelay = window.setTimeout(function(){
		$(bosInfo).css("visibility", "hidden");}, 300);
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
}
function hideChls(){
	$(chlsInfo).css("animation", "opacityOut 0.3s linear");
	var hideDelay = window.setTimeout(function(){
		$(chlsInfo).css("visibility", "hidden");}, 300);
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
}
function hideNash(){
	$(nashInfo).css("animation", "opacityOut 0.3s linear");
	var hideDelay = window.setTimeout(function(){
		$(nashInfo).css("visibility", "hidden");}, 300);
}