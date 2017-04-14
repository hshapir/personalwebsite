var scrollTrue;
var lastScrollTop = 0;
var sections = ['#intro', '#mainContent'];
var secIndex = 0;
var isMachineScroll=false;
var firstScroll = true;
var lastSuccessfulScroll = new Date().getTime();
var openPage = true;

$(document).ready(function(){
	if(openPage){

		scrollToSnapPoint();
		openPage=false;
	}
	$(document).bind('mousewheel', function(e){
		/*if(new Date().getTime() - lastSuccessfulScroll < 1000){
			return;
		}
		if(e.originalEvent.deltaY > 0 && secIndex < 1){
			secIndex++;
			scrollToSnapPoint();
		}
		else if(e.originalEvent.deltaY < 0 && secIndex > 0){
			secIndex--;
			scrollToSnapPoint();
		}
		hasScrolled();
		lastSuccessfulScroll = new Date().getTime();*/
		if(new Date() - lastSuccessfulScroll > 1000 && firstScroll && e.originalEvent.deltaY > 0){
			
			secIndex = 1;
			scrollToSnapPoint();
			$('body').css("overflow", "visible");
			firstScroll = false;
			lastSuccessfulScroll = new Date();
			disableScroll();
			var newVar = setTimeout(enableScroll, 600);
		}
		else if(new Date() - lastSuccessfulScroll > 2000 && $(document).scrollTop() < $(window).height() * 2/3){
			
			firstScroll = true;
			$('body').css("overflow", "hidden");
			secIndex=0;
			scrollToSnapPoint();
			lastSuccessfulScroll = new Date();
			disableScroll();
			var varry = setTimeout(enableScroll, 600);
		}
	});
});

function  onScroll(){
	
  	hasScrolled();
  	
}

/*function hasScrolled() {
	var navbarHeight = $("header").outerHeight();
	var st = $(this).scrollTop();
	if(st>lastScrollTop && st > navbarHeight){
		$('header').removeClass('nav-down').addClass('nav-up');
		
	} else if(st+$(window).height() < $(document).height()){
		$('header').removeClass('nav-up').addClass('nav-down');
	}
	lastScrollTop=st;
}*/

function scrollToSnapPoint(){
	$('html, body').animate({
		 scrollTop: $(sections[secIndex]).offset().top
	}, 500);
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}