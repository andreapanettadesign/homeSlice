/*NavBar functionality*/
function myFunction() {
	var x = document.getElementById("myNavBar");
	if(x.className === "navBar") {
		x.className += " responsive";
	} else {
		x.className = "navBar";
	}
}


/*Toast Message functionalities */
function snackFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function snackFunction2() {
  var x = document.getElementById("snackbar2");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function trashFunction() {
  var x = document.getElementById("trashbin");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function payFunction() {
  var x = document.getElementById("payment");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

