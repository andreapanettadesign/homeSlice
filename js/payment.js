/*Payment Section*/
var modal1 = document.getElementById("paymentPop1");
var modal2 = document.getElementById("paymentPop2");
var modal3 = document.getElementById("paymentPop3");
var btn1 = document.getElementById("visaBtn");
var btn2 = document.getElementById("masterBtn");
var btn3 = document.getElementById("payBtn");
var span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

span.onclick = function() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}