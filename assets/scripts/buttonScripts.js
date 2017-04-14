function copyEmail(){
	var addr = document.createElement("input");
	addr.setAttribute("value", "harrisonclassof2018@gmail.com");
	document.body.appendChild(addr);
	addr.select();
	document.execCommand("copy");
	document.body.removeChild(addr);
}