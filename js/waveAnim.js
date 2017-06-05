/* This animation is slightly adapted to suit my needs, but the credit for making it goes to 
"Captain Anonymous" of codepen.io - you can find the original at this link: https://codepen.io/anon/pen/JNgpOb*/

// global vars
var div = document.createElement('div'),
    body = document.getElementsByTagName('body')[0],
    canvas = document.createElement('canvas'),    
    ctx = canvas.getContext('2d'),
    w,
    h;

// events
window.onresize = function(event) {
  SetMargins();
};

// initialization
function initWaves() {
  document.body.appendChild(div);
  div.style.position = "fixed";
  div.style.zIndex = "-99";
  div.style.opacity = "0.35";
  div.style.animation = "waveOpacIn linear 3s";
  canvas.style.zIndex = "-100";
  canvas.style.position = "absolute";  
  div.appendChild(canvas);
  
  SetMargins();
  Update();
}


// main loop
function Update() {

  ctx.fillStyle = '#00d4c8';
  ctx.fillRect(0,0,w,h);
  
  var timeCur = new Date().getTime(); 
  
  var maxLayers = Math.floor(h / 150) + 1;
  var waveLayer = -1;
  var offset = 0;
  var offsetInc = 30;
  
  while(waveLayer < maxLayers){
    var timeDivider = (8 - (5 * waveLayer / maxLayers));
    var timeMod = timeCur / timeDivider;
    var ampMod = 32 + 12 * waveLayer;
    //Origingal is 8 + ...
    var ampMult = -4 + waveLayer * 3;
    
    var grd = ctx.createLinearGradient(0,offset,0,offset + offsetInc * 2);
    /*grd.addColorStop(0,'#80e0e0');//'rgba(255,255,208,0.2)');
    grd.addColorStop(0.5,'#40d8e4');//'rgba(255,208,208,0)');
    grd.addColorStop(1,'#40d4e0');*/
    grd.addColorStop(0,'#40b0e0');//'rgba(255,255,208,0.2)');
    grd.addColorStop(0.5,'#00a8d4');//'rgba(255,208,208,0)');
    grd.addColorStop(1,'#0084b0');
    
    ctx.beginPath();

    for(var i = 0 ; i < w; i+= 10 ){      
      var timeUse = (timeMod + i) / ampMod;
      var amp = ampMult * Math.sin(timeUse);
      var height = 4 * Math.cos((timeMod) / 48);
      var yPoint = amp - height + offset;
      var xPoint = i;
      ctx.lineTo(xPoint, yPoint);
    }
    ctx.lineTo(w,h+offset);
    ctx.lineTo(0,h+offset);
    ctx.lineTo(0,offset);
    
    ctx.closePath();
    ctx.fillStyle = grd;
    ctx.fill();
    
    waveLayer++;
    offsetInc = 30 + 10 * Math.pow(waveLayer,2);
    offset += offsetInc
  }
  
  requestAnimationFrame(Update);
}


// functions
function SetMargins () {
  var bodyW = document.documentElement.clientWidth,
      bodyH = document.documentElement.clientHeight;
  
  w = canvas.width = Math.max(600,bodyW);
  h = canvas.height = bodyH;
  canvas.style.bottom = 0;
  
 div.style.left=div.style.right=div.style.top=div.style.bottom="0";
}