var qian1 = document.getElementById("qian1");
var qian2 = document.getElementById("qian2");
var qian3 = document.getElementById("qian3");
var qian4 = document.getElementById("qian4");
var qian5 = document.getElementById("qian5");

var shuliang = document.getElementById("shuliang");
var shuliang1 = document.getElementById("shuliang1");

var wuzhong1 = document.getElementById("wuzhong1");
var wuzhong2 = document.getElementById("wuzhong2");
var wuzhong3 = document.getElementById("wuzhong3");

var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");

s1.onclick = function() {


    if (shuliang.value > 0) {


        qian2.innerHTML = (parseFloat(qian2.innerHTML) - parseFloat(qian1.innerHTML)).toFixed(1);
        if (check3.checked) {
            qian5.innerHTML = (parseFloat(qian5.innerHTML) - parseFloat(qian1.innerHTML)).toFixed(1);
            wuzhong3.innerHTML = parseFloat(wuzhong1.innerHTML) + parseFloat(wuzhong2.innerHTML);
        }


        wuzhong1.innerHTML = (parseFloat(wuzhong1.innerHTML) - 0.45).toFixed(3);
        shuliang.value = parseInt(shuliang.value).toFixed(2) - 1;



    } else {
        shuliang.value = 0;
        wuzhong1.innerHTML = 0;
        qian2.innerHTML = 0;

    }


}

s2.onclick = function() {

    // qian2.innerHTML = parseInt(qian2.innerHTML) + parseInt(qian1.innerHTML);
    qian2.innerHTML = (parseFloat(qian2.innerHTML) + parseFloat(qian1.innerHTML)).toFixed(1);
    if (check3.checked) {
        qian5.innerHTML = (parseFloat(qian5.innerHTML) + parseFloat(qian1.innerHTML)).toFixed(1);
        wuzhong3.innerHTML = parseFloat(wuzhong1.innerHTML) + parseFloat(wuzhong2.innerHTML);

    }


    wuzhong1.innerHTML = (parseFloat(wuzhong1.innerHTML) + 0.45).toFixed(2);
    shuliang.value = parseInt(shuliang.value) + 1;


}

s3.onclick = function() {

    if (shuliang1.value > 0) {


        qian4.innerHTML = (parseFloat(qian4.innerHTML) - parseFloat(qian3.innerHTML)).toFixed(1);
        if (check4.checked) {
            qian5.innerHTML = (parseFloat(qian5.innerHTML) - parseFloat(qian3.innerHTML)).toFixed(1);
            wuzhong3.innerHTML = parseFloat(wuzhong1.innerHTML) + parseFloat(wuzhong2.innerHTML);
        }


        wuzhong2.innerHTML = (parseFloat(wuzhong2.innerHTML) - 0.45).toFixed(3);
        shuliang1.value = parseInt(shuliang1.value).toFixed(2) - 1;


    } else {
        shuliang1.value = 0;
        wuzhong2.innerHTML = 0;
        qian4.innerHTML = 0;

    }




}

s4.onclick = function() {

    // qian2.innerHTML = parseInt(qian2.innerHTML) + parseInt(qian1.innerHTML);
    qian4.innerHTML = (parseFloat(qian4.innerHTML) + parseFloat(qian3.innerHTML)).toFixed(1);
    if (check4.checked) {
        qian5.innerHTML = (parseFloat(qian5.innerHTML) + parseFloat(qian3.innerHTML)).toFixed(1);
        wuzhong3.innerHTML = parseFloat(wuzhong1.innerHTML) + parseFloat(wuzhong2.innerHTML);
    }


    wuzhong2.innerHTML = (parseFloat(wuzhong2.innerHTML) + 0.45).toFixed(2);
    shuliang1.value = parseInt(shuliang1.value) + 1;



}

var sshan1 = document.getElementById("sshan1");
var check3 = document.getElementById("check3");

var sshan2 = document.getElementById("sshan2");
var check4 = document.getElementById("check4");

var check1 = document.getElementById("check1");


var check = document.getElementById("check");

var kuangname = document.getElementsByName("kuangname");




var shang_div = document.getElementById("shang_div");
var shang_div1 = document.getElementById("shang_div1");
sshan1.onclick = function() {
    if (check3.checked) {
        shang_div.style.display = "none";
        shang_div1.style.top = 266 + "px";
    }
}

sshan2.onclick = function() {
    if (check4.checked) {
        shang_div1.style.display = "none";

    }
}
console.log(kuangname);
check.onclick = function() {
    if (check.checked) {
        for (var i = 0; i < kuangname.length; i++) {
            kuangname[i].checked = true;
            qian5.innerHTML = (parseFloat(qian2.innerHTML) + parseFloat(qian4.innerHTML)).toFixed(1);
            wuzhong3.innerHTML = parseFloat(wuzhong1.innerHTML) + parseFloat(wuzhong2.innerHTML);
        }

    } else {
        for (var i = 0; i < kuangname.length; i++) {
            kuangname[i].checked = false;
            qian5.innerHTML = 0;
            wuzhong3.innerHTML = 0;
        }

    }

}
check3.onclick = function() {
    if (check3.checked && check4.checked) {
        qian5.innerHTML = (parseFloat(qian2.innerHTML) + parseFloat(qian4.innerHTML)).toFixed(1);
        wuzhong3.innerHTML = parseFloat(wuzhong1.innerHTML) + parseFloat(wuzhong2.innerHTML);
    } else if (check3.checked == true && check4.checked == false) {
        qian5.innerHTML = (parseFloat(qian2.innerHTML)).toFixed(1);
        wuzhong3.innerHTML = parseFloat(wuzhong1.innerHTML);
    } else if (check3.checked == false && check4.checked == true) {
        qian5.innerHTML = (parseFloat(qian4.innerHTML)).toFixed(1);
        wuzhong3.innerHTML = parseFloat(wuzhong2.innerHTML);
    } else {
        qian5.innerHTML = 0;
        wuzhong3.innerHTML = 0;
    }
}

check4.onclick = function() {
    if (check3.checked && check4.checked) {
        qian5.innerHTML = (parseFloat(qian2.innerHTML) + parseFloat(qian4.innerHTML)).toFixed(1);
        wuzhong3.innerHTML = parseFloat(wuzhong1.innerHTML) + parseFloat(wuzhong2.innerHTML);
    } else if (check3.checked == true && check4.checked == false) {
        qian5.innerHTML = (parseFloat(qian2.innerHTML)).toFixed(1);
        wuzhong3.innerHTML = parseFloat(wuzhong1.innerHTML);
    } else if (check3.checked == false && check4.checked == true) {
        qian5.innerHTML = (parseFloat(qian4.innerHTML)).toFixed(1);
        wuzhong3.innerHTML = parseFloat(wuzhong2.innerHTML);
    } else {
        qian5.innerHTML = 0;
        wuzhong3.innerHTML = 0;
    }
}


var jieshan = document.getElementById("jieshan");
var jieqing = document.getElementById("jieqing");
jieqing.onclick = function() {
    shang_div.style.display = "none";
    shang_div1.style.display = "none";
}

jieshan.onclick = function() {
    if (check3.checked == true && check4.checked == false) {
        shang_div.style.display = "none";
        shang_div1.style.top = 266 + "px";
    } else if (check3.checked == true && check4.checked == true) {
        shang_div.style.display = "none";
        shang_div1.style.display = "none";
    } else if (check3.checked == false && check4.checked == true) {
        shang_div1.style.display = "none";
    }
}
