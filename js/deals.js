
/*CollapsibleSelection*/
var coll = document.getElementsByClassName("dealsCollapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

/* Number Increment/Decrement Buttons */
var x = 0;

document.getElementById("number").innerHTML = x;

function button1() {
	document.getElementById("number").innerHTML = ++x;
}

function button2() {
	document.getElementById("number").innerHTML = --x;
}

document.getElementById("number1").innerHTML = x;

function button1() {
	document.getElementById("number1").innerHTML = ++x;
}

function button2() {
	document.getElementById("number1").innerHTML = --x;
}

document.getElementById("number2").innerHTML = x;

function button1() {
	document.getElementById("number2").innerHTML = ++x;
}

function button2() {
	document.getElementById("number2").innerHTML = --x;
}
