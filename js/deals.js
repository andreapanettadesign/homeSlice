
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

var x = 1;

document.getElementById("number").innerHTML = x;

function button1() {
	document.getElementById("number").innerHTML = ++x;
}

function button2() {
	document.getElementById("number").innerHTML = --x;
}

/*
var span = document.getElementsByClassName("number");
var plus = document.getElementById("plusBtn");
var minus = document.getElementById("minusBtn");

plus.addEventListener('click', function () {
	span.textContent = x++;
});

minus.addEventListener('click', function () {
	span.textContent = x--;
});*/


