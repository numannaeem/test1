var headerTexts = ["hello, world.","welcome","to","my","website.","enjoy","your",
					"stay!","okay,","you","may","stop","clicking","now.","seriously?",
					"you're","still","doing","this?","wow.","-_-","stop!","stop!!",
					"stop!!!","alright.","i'm done.","~"];
var hdrCounter = 1;
var imgCounter = 1;
var menuOpened = 0;


function updtHeader() {	
	document.getElementById("mainHeader").innerHTML = headerTexts[hdrCounter];
	hdrCounter++;
	if(hdrCounter == headerTexts.length) {
		hdrCounter = 0;
	}
}

function checkDark() {
	if (parseInt(localStorage.dm) == 1) {
		document.getElementById("darkmode").click();	
	}
		 
}


function darkMode() {
	var headings = document.getElementsByClassName('headings');
	var content_elements = document.getElementsByClassName('boxdiv');
	var header = document.getElementById('header');
	var closure = document.getElementById('closure');

	if (document.getElementById("darkmode").checked == true) {
		localStorage.dm ="1";
		for(var i = 0; i < content_elements.length; i++) {
			content_elements[i].style.backgroundColor = "#201e19";
			content_elements[i].style.color = "#d9d9d9";
			headings[i].style.color = "#e60000";
		}
		closure.style.backgroundColor = "#333333";
		closure.style.color = "#f5f5f5";
		header.style.backgroundImage = "url('./images/bgimgblack.jpg')";
		header.style.color = "#f0c371";
		document.getElementById('me').style.color = "#c1c1c1";
	}

	else {
		localStorage.dm = "0";
		for(var i = 0; i < content_elements.length; i++) {
			content_elements[i].style.backgroundColor = "#fffff1";
			content_elements[i].style.color = "black";	
			headings[i].style.color = "brown";
		}
		closure.style.backgroundColor = "white";
		closure.style.color = "black";
		header.style.backgroundImage = "url('./images/bgimgwhite.jpg')";
		header.style.color = "#996b17";
		document.getElementById('me').style.color = "#4f4f4f";
	}
}

//---------------PRINT FAMILY IMAGES-------------------------------------------------------------------

function chgImg(x) {
	var famimg = document.getElementById("famimg");
	var caption = document.getElementById("caption");
	famimg.style.opacity = "0";
	
	if (x == -1) {
		if (imgCounter == 1) {
			imgCounter = 5;
		}
		else {
			imgCounter--;
		}
	}
	if (x == 1) {
		if (imgCounter == 5) {
			imgCounter = 1;
		}
		else {
			imgCounter++;
		}
	}

	setTimeout(function(){ switch(imgCounter) {
		case 1: famimg.src = "./images/dad.jpeg";
				caption.innerHTML = "the Dad!";
				break;
		case 2: famimg.src = "./images/mom.jpg";
				caption.innerHTML = "the Mom!";
				break;
		case 3: famimg.src = "./images/bbro.jpeg";
				caption.innerHTML = "the Big Bro!";
				break;
		case 4: famimg.src = "./images/sbro.JPG";
				caption.innerHTML = "the Broski!";
				break;
		case 5: famimg.src = "./images/fam.jpg";
				caption.innerHTML = "the Fam!";
				break;
	}},170);
	
	setTimeout(function() {famimg.style.opacity = "1"} , 200);
}

//--------------------------------------------------------------------------------------------------------------------------------------- 

function dropMenu() {
	var width = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
	var navbar = document.getElementById("navbar");
	var hamburger = document.getElementById("hamburger");
	var menuItems = null;
	if(!menuOpened) {
		menuItems = document.getElementsByClassName("mi-collapsed");	
		hamburger.style.backgroundColor = "brown";
		while (menuItems.length > 0) {
			menuItems.item(0).classList.add('mi-expanded');
			menuItems[0].classList.remove('mi-collapsed');
		}
		menuOpened = 1;
	}
	else if(menuOpened) {
		menuItems = document.getElementsByClassName("mi-expanded");
		hamburger.style.backgroundColor = "#383431";
		while (menuItems.length > 0) {
			menuItems.item(0).classList.add('mi-collapsed');
			menuItems[0].classList.remove('mi-expanded');
		}
		menuOpened = 0;
	}
}
