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
var fuzhuang2 = document.getElementsByClassName("fuzhuang2");
var fufu = document.getElementById("fufu");
for (var i = 0; i < fuzhuang2.length; i++) {
    (function(i) {
        fuzhuang2[i].onclick = function() {
            for (var j = 0; j < fuzhuang2.length; j++) {
                fuzhuang2[j].classList.remove('sel');
                // fuzhuang2[j].className = "fuzhuang2";
            }
            fufu.style.borderTop = "1px solid #f2f2f2";
            fufu.style.borderLeft = "1px solid #f2f2f2";
            fufu.style.borderRight = "1px solid #f2f2f2";
            fufu.style.borderBottom = "2px solid #F08503";
            fufu.style.color = "black";
            fuzhuang2[i].classList.add('sel');
            console.log(fuzhuang2[i].className);



        }
    })(i);
}

fufu.onclick = function() {
    for (var j = 0; j < fuzhuang2.length; j++) {
        fuzhuang2[j].classList.remove('sel');
        // fuzhuang2[j].className = "fuzhuang2";
    }
    fufu.style.borderTop = "1px solid #F08503";
    fufu.style.borderLeft = "1px solid #F08503";
    fufu.style.borderRight = "1px solid #F08503";
    fufu.style.borderBottom = "0px";
    fufu.style.color = "#F08503";
}
var shouji2 = document.getElementsByClassName("shouji2");
var shoushou = document.getElementById("shoushou");
for (var i = 0; i < shouji2.length; i++) {
    (function(i) {
        shouji2[i].onclick = function() {
            for (var j = 0; j < shouji2.length; j++) {
                shouji2[j].classList.remove('sel2');
                // fuzhuang2[j].className = "fuzhuang2";
            }
            shoushou.style.borderTop = "1px solid #f2f2f2";
            shoushou.style.borderLeft = "1px solid #f2f2f2";
            shoushou.style.borderRight = "1px solid #f2f2f2";
            shoushou.style.borderBottom = "2px solid #cfc329";
            shoushou.style.color = "black";
            shouji2[i].classList.add('sel2');




        }
    })(i);
}

shoushou.onclick = function() {
    for (var j = 0; j < shouji2.length; j++) {
        shouji2[j].classList.remove('sel2');
        // fuzhuang2[j].className = "fuzhuang2";
    }
    shoushou.style.borderTop = "1px solid #cfc329";
    shoushou.style.borderLeft = "1px solid #cfc329";
    shoushou.style.borderRight = "1px solid #cfc329";
    shoushou.style.borderBottom = "0px";
    shoushou.style.color = "#cfc329";
}

shipin2 = document.getElementsByClassName("shipin2");
var shishi = document.getElementById("shishi");
for (var i = 0; i < shipin2.length; i++) {
    (function(i) {
        shipin2[i].onclick = function() {
            for (var j = 0; j < shipin2.length; j++) {
                shipin2[j].classList.remove('sel3');
                // fuzhuang2[j].className = "fuzhuang2";
            }
            shishi.style.borderTop = "1px solid #f2f2f2";
            shishi.style.borderLeft = "1px solid #f2f2f2";
            shishi.style.borderRight = "1px solid #f2f2f2";
            shishi.style.borderBottom = "2px solid red";
            shishi.style.color = "black";

            shipin2[i].classList.add('sel3');



        }
    })(i);
}

shishi.onclick = function() {
    for (var j = 0; j < shipin2.length; j++) {
        shipin2[j].classList.remove('sel3');
        // fuzhuang2[j].className = "fuzhuang2";
    }
    shishi.style.borderTop = "1px solid red";
    shishi.style.borderLeft = "1px solid red";
    shishi.style.borderRight = "1px solid red";
    shishi.style.borderBottom = "0px";
    shishi.style.color = "red";
}

jiayong2 = document.getElementsByClassName("jiayong2");
var jiajia = document.getElementById("jiajia");
for (var i = 0; i < jiayong2.length; i++) {
    (function(i) {
        jiayong2[i].onclick = function() {
            for (var j = 0; j < jiayong2.length; j++) {
                jiayong2[j].classList.remove('sel4');
                // fuzhuang2[j].className = "fuzhuang2";
            }
            jiajia.style.borderTop = "1px solid #f2f2f2";
            jiajia.style.borderLeft = "1px solid #f2f2f2";
            jiajia.style.borderRight = "1px solid #f2f2f2";
            jiajia.style.borderBottom = "2px solid #35bbc7";
            jiajia.style.color = "black";

            jiayong2[i].classList.add('sel4');



        }
    })(i);
}

jiajia.onclick = function() {
    for (var j = 0; j < jiayong2.length; j++) {
        jiayong2[j].classList.remove('sel4');
        // fuzhuang2[j].className = "fuzhuang2";
    }
    jiajia.style.borderTop = "1px solid #35bbc7";
    jiajia.style.borderLeft = "1px solid #35bbc7";
    jiajia.style.borderRight = "1px solid #35bbc7";
    jiajia.style.borderBottom = "0px";
    jiajia.style.color = "#35bbc7";
}

shenghuo2 = document.getElementsByClassName("shenghuo2");
var shengsheng = document.getElementById("shengsheng");
for (var i = 0; i < shenghuo2.length; i++) {
    (function(i) {
        shenghuo2[i].onclick = function() {
            for (var j = 0; j < shenghuo2.length; j++) {
                shenghuo2[j].classList.remove('sel5');
                // fuzhuang2[j].className = "fuzhuang2";
            }
            shengsheng.style.borderTop = "1px solid #f2f2f2";
            shengsheng.style.borderLeft = "1px solid #f2f2f2";
            shengsheng.style.borderRight = "1px solid #f2f2f2";
            shengsheng.style.borderBottom = "2px solid #6d3892";
            shengsheng.style.color = "black";

            shenghuo2[i].classList.add('sel5');



        }
    })(i);
}

shengsheng.onclick = function() {
    for (var j = 0; j < shenghuo2.length; j++) {
        shenghuo2[j].classList.remove('sel5');
        // fuzhuang2[j].className = "fuzhuang2";
    }
    shengsheng.style.borderTop = "1px solid #6d3892";
    shengsheng.style.borderLeft = "1px solid #6d3892";
    shengsheng.style.borderRight = "1px solid #6d3892";
    shengsheng.style.borderBottom = "0px";
    shengsheng.style.color = "#6d3892";
}
