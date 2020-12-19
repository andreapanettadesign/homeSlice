/*CV Upload Section*/
var modal = document.getElementById("cvUpload");
var btn = document.getElementById("cvButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

/*Toast Message to inform customer their query/cv was sent */
function myFunction() {
  var x = document.getElementById("toast1");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}