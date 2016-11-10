var daohangli = document.getElementById("daohangli");
var yin = document.getElementById("yin");
daohangli.onmouseover = function() {
    yin.style.display = "block";
    daohangli.style.backgroundColor = "#cb6f03";
}
yin.onmouseover = function() {
    yin.style.display = "block";
    daohangli.style.backgroundColor = "#cb6f03";
}
daohangli.onmouseout = function() {
    yin.style.display = "none";
    daohangli.style.backgroundColor = "#F08503";

}
yin.onmouseout = function() {
    yin.style.display = "none";
    daohangli.style.backgroundColor = "#F08503";
}

var time = 0;
var sid;

function jjd() {
    var arr = document.getElementsByClassName("dingtu");
    arr[0].style.display = "none";
    arr[1].style.display = "none";
    arr[2].style.display = "none";
    arr[3].style.display = "none";


    arr[time].style.display = "block";
    time = (time + 1) % 4;
}
onload = function() {


    sid = window.setInterval(jjd, 2000);
}

var shangpin = document.getElementById("shangpin");
var dianpu = document.getElementById("dianpu");
dianpu.onclick = function() {
    shangpin.style.backgroundColor = "#e1e8e5";
    shangpin.style.color = "#F08503";
    dianpu.style.backgroundColor = "#F08503";
    dianpu.style.color = "white";
}
shangpin.onclick = function() {
    shangpin.style.backgroundColor = "#F08503";
    shangpin.style.color = "white";
    dianpu.style.backgroundColor = "#e1e8e5";
    dianpu.style.color = "#F08503";
}
