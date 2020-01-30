function setCustomBGColor(color){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var red = document.querySelector('.bg-color-picker .bg-red-slider').value;
	var green = document.querySelector('.bg-color-picker .bg-green-slider').value;
	var blue = document.querySelector('.bg-color-picker .bg-blue-slider').value;
	xhttp.open("POST", "/api/bgcolor", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("color="+color+"&red="+red+"&green="+green+"&blue="+blue);
}

function setCustomTextColor(color){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var red = document.querySelector('.text-color-picker .text-red-slider').value;
	var green = document.querySelector('.text-color-picker .text-green-slider').value;
	var blue = document.querySelector('.text-color-picker .text-blue-slider').value;
	xhttp.open("POST", "/api/textcolor", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("color="+color+"&red="+red+"&green="+green+"&blue="+blue);
}

function setBGGreen(){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var red = 0;
	var green = 255;
	var blue = 0;
	xhttp.open("POST", "/api/bgcolor", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("color=solid&red="+red+"&green="+green+"&blue="+blue);
}

function setBGRed(){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var red = 255;
	var green = 0;
	var blue = 0;
	xhttp.open("POST", "/api/bgcolor", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("color=solid&red="+red+"&green="+green+"&blue="+blue);
}

function setBGBlue(){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var red = 0;
	var green = 0;
	var blue = 255;
	xhttp.open("POST", "/api/bgcolor", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("color=solid&red="+red+"&green="+green+"&blue="+blue);
}

function setBGBlack(){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var red = 0;
	var green = 0;
	var blue = 0;
	xhttp.open("POST", "/api/bgcolor", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("color=solid&red="+red+"&green="+green+"&blue="+blue);
}

function setTextWhite(){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var red = 255;
	var green = 255;
	var blue = 255;
	xhttp.open("POST", "/api/textcolor", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("color=solid&red="+red+"&green="+green+"&blue="+blue);
}

function setTextBlack(){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var red = 0;
	var green = 0;
	var blue = 0;
	xhttp.open("POST", "/api/textcolor", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("color=solid&red="+red+"&green="+green+"&blue="+blue);
}

function setFont(font){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "/api/font", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("font="+font);
}

function setContent(content){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var checked = document.getElementById(content).checked;
	xhttp.open("POST", "/api/setcontent", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("content="+content+"&checked="+checked);
}

function setWeather(){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var unit = document.getElementById("tempUnit").value;
	var zip = document.getElementById("zipInput").value;
	if (zip == ''){
		zip = '80925';
		
	}
	xhttp.open("POST", "/api/weather", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("unit="+unit+"&zip="+zip);
}

function setCustomText(){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var text = document.getElementById('textInput').value;
	xhttp.open("POST", "/api/setcustomtext", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("text="+text);
}

function setBrightness(){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var brightness = document.getElementById('brightnessSlider').value;
	xhttp.open("POST", "/api/brightness", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("brightness="+brightness);
}

function settings(action){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "/api/settings", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("action="+action);
}

function setTextAnimation(animation){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var speed = document.getElementById('speedInput').value;
	if (speed == ''){
		speed = 5;
	}
	console.log(speed);
	xhttp.open("POST", "/api/textanimation", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("animation="+animation+"&speed="+speed);
}

var responseTextArray = [];

function getGateList(){
	origin = window.location.origin
	var xhttp = new XMLHttpRequest();
	var re = /'(\S*)'/g;
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			responseTextArray = this.responseText.match(re);
			var text = "";
			for (i = 0; i < responseTextArray.length; i++){
					text += "<div class=\"gate-address id=\"element" + i + "\" onclick=\"gateClick(" + i + ")\">" + i + ": " + responseTextArray[i] + "</div>";
			}
			document.getElementById("gates-list").innerHTML = text;
		}
	};
	xhttp.open("GET", "/api/server/gates", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("");
}

// Color picker
function setBGRgb () {
	var red = document.querySelector('.bg-color-picker .bg-red-slider').value;
	var green = document.querySelector('.bg-color-picker .bg-green-slider').value;
	var blue = document.querySelector('.bg-color-picker .bg-blue-slider').value;
	var color = "rgb(" + red + "," + green + "," + blue + ")";
	document.querySelector('.bg-color-preview').style.background = color;
}
	setBGRgb();

	// Color picker
function setTextRgb () {
	var red = document.querySelector('.text-color-picker .text-red-slider').value;
	var green = document.querySelector('.text-color-picker .text-green-slider').value;
	var blue = document.querySelector('.text-color-picker .text-blue-slider').value;
	var color = "rgb(" + red + "," + green + "," + blue + ")";
	document.querySelector('.text-color-preview').style.background = color;
}
	setTextRgb();