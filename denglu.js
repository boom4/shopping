var inp1 = document.getElementById("input");
var inp2 = document.getElementById("input2");
inp2.onfocus = function() {
    inp2.style.borderColor = "#ffab00";
}
inp2.onblur = function() {
    inp2.style.borderColor = "gray";
}
inp1.onfocus = function() {
    inp1.style.borderColor = "#ffab00";
}
inp1.onblur = function() {
    inp1.style.borderColor = "gray";
}

var img1 = document.getElementById("img1");
img1.onmouseover = function() {

    img1.src = "1.jpg";
}
img1.onmouseout = function() {

    img1.src = "5.jpg";
}
var img2 = document.getElementById("img2");
img2.onmouseover = function() {

    img2.src = "2.jpg";
}
img2.onmouseout = function() {

    img2.src = "6.jpg";
}
var img3 = document.getElementById("img3");
img3.onmouseover = function() {

    img3.src = "3.jpg";
}
img3.onmouseout = function() {

    img3.src = "7.jpg";
}
var img4 = document.getElementById("img4");
img4.onmouseover = function() {

    img4.src = "4.jpg";
}
img4.onmouseout = function() {

    img4.src = "8.jpg";
}

var er = document.getElementById("er");
var er2 = document.getElementById("er2");
var denglukuang = document.getElementById("denglukuang");
var denglukuang2 = document.getElementById("denglukuang2");
er.onclick = function() {
    denglukuang2.style.display = "block";
    denglukuang.style.display = "none";
}
er2.onclick = function() {
    denglukuang.style.display = "block";
    denglukuang2.style.display = "none";
}
