var zhao1 = document.getElementById("zhao1");
var zhao2 = document.getElementById("zhao2");
var zhao3 = document.getElementById("zhao3");
var zhao4 = document.getElementById("zhao4");
var zhao9 = document.getElementById("zhao9");

var xia = document.getElementById("xia");
xia.onclick = function() {
    if (zhao1.src.match("zhao1")) {

        zhao1.src = "../img/zhao5.jpg";
        zhao2.src = "../img/zhao6.jpg"
    } else if (zhao2.src.match("zhao6")) {

        zhao2.src = "../img/zhao2.jpg";
        zhao3.src = "../img/zhao7.jpg"
    } else if (zhao3.src.match("zhao7")) {
        zhao3.src = "../img/zhao3.jpg";
        zhao4.src = "../img/zhao8.jpg";
        zhao9.style.display = "block";
        xia.style.display = "none";
    }
}
