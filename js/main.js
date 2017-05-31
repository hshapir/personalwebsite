/*$(document).ready(function() {
	$('body').css("overflow", "hidden");
    setTimeout(function() {
        $('body').addClass('loaded');
        $('body').css("overflow", "visible");
        $('body').css("animation", "bodyIn 1s linear");
    }, 3000);
    setTimeout(function() {
    	$('body').css("animation", "bodyOut 0.5s linear");
    }, 2500);
  });*/

function closeContact(){
    $('.contactDialogue').css("visibility", "hidden");
}

function showContact(){
    $('.contactDialogue').css("visibility", "visible");
}