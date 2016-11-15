var shangpin = document.getElementById("shangpin");
var dianpu = document.getElementById("dianpu");
dianpu.onclick = function () {
    shangpin.style.backgroundColor = "#e1e8e5";
    shangpin.style.color = "#F08503";
    dianpu.style.backgroundColor = "#F08503";
    dianpu.style.color = "white";
}
shangpin.onclick = function () {
    shangpin.style.backgroundColor = "#F08503";
    shangpin.style.color = "white";
    dianpu.style.backgroundColor = "#e1e8e5";
    dianpu.style.color = "#F08503";
}

var daohangli = document.getElementById("daohangli");
var yin = document.getElementById("yin");
daohangli.onmouseover = function () {
    yin.style.display = "block";
    daohangli.style.backgroundColor = "#cb6f03";
}
yin.onmouseover = function () {
    yin.style.display = "block";
    daohangli.style.backgroundColor = "#cb6f03";
}
daohangli.onmouseout = function () {
    yin.style.display = "none";
    daohangli.style.backgroundColor = "#F08503";

}
yin.onmouseout = function () {
    yin.style.display = "none";
    daohangli.style.backgroundColor = "#F08503";
}

var zuodingwei = document.getElementsByClassName("zuodingwei");
var cl1 = document.getElementsByClassName("cl1");
var shujia = document.getElementsByClassName("shujia");
var btn_search = document.getElementById('btn_search');
var ipt_search = document.getElementById('input');

var url = "http://127.0.0.1:3000/";

btn_search.onclick = function () {
    console.log(ipt_search.value);
    $.post(url + 'search', {
        ipt_search: ipt_search.value,
    }, function (data, status) {
        console.log(data);
        if (data.list != 0) {
            console.log(data);
            console.log(data.list[0].src);
            console.log(data.list[0].name);

                sessionStorage.splbjiage = data.list[0].jiage;
            console.log(sessionStorage.splbjiage);




                for(var b = 0;b<zuodingwei.length;b++){

                    zuodingwei[b].src = "http://127.0.0.1:3000/daima/img/" + data.list[b].src;

            }
            for (var b = 0; b < cl1.length; b++) {
                cl1[b].src = "http://127.0.0.1:3000/daima/img/" + data.list[b].src;
                //zuodingwei[b].src = "http://127.0.0.1:3000/daima/img/" + data.list[b].src;

            }
            for (var i = 0; i < shujia.length; i++) {
                console.log(shujia[i].innerHTML);
                shujia[i].innerHTML = sessionStorage.splbjiage;
            }

            //localStorage.splbsrc = "http://127.0.0.1:3000/daima/img/" + data.list[0].src;
            //localStorage.splbjiage = data.list[0].jiage;
            //console.log(localStorage.splbsrc);
            //location.href = 'daima/splb/splb.html'

        } else {
            alert("无搜索结果");
        }
    });
}


//onload = function(){
//    console.log(localStorage.splbsrc);
//    for(var i=0;i<zuodingwei.length;i++){
//        //console.log(zuodingwei[i].src);
//        zuodingwei[i].src = localStorage.splbsrc;
//    }
//    for(var i=0;i<cl1.length;i++){
//        console.log(cl1[i].src);
//
//            cl1[i].src = localStorage.splbsrc;
//            //localStorage.clear();
//            console.log(cl1[i].src);
//
//
//    }
//    for(var i=0;i<shujia.length;i++){
//        //console.log(shujia[i].innerHTML);
//        shujia[i].innerHTML = localStorage.splbjiage;
//    }
//
//}
