var qian1 = document.getElementById("qian1");
var qian2 = document.getElementById("qian2");
var qian3 = document.getElementById("qian3");
var qian4 = document.getElementById("qian4");

var shang1 = document.getElementById("shang1");
var shang2 = document.getElementById("shang2");
var shuliang = document.getElementById("shuliang");
shang1.onclick = function() {

    if (parseInt(shuliang.innerHTML) > 0) {
        shuliang.innerHTML = parseInt(shuliang.innerHTML) - 1;

        qian2.innerHTML = parseInt(qian2.innerHTML) - parseInt(qian1.innerHTML);
        qian3.innerHTML = parseInt(qian3.innerHTML) - parseInt(qian1.innerHTML);
        qian4.innerHTML = parseInt(qian4.innerHTML) - parseInt(qian1.innerHTML);
    } else {
        shuliang.innerHTML = 0;

        qian2.innerHTML = 0;
        qian3.innerHTML = 0;
        qian4.innerHTML = 0;
    }

}

shang2.onclick = function() {

    qian2.innerHTML = parseInt(qian2.innerHTML) + parseInt(qian1.innerHTML);
    qian3.innerHTML = parseInt(qian3.innerHTML) + parseInt(qian1.innerHTML);
    qian4.innerHTML = parseInt(qian4.innerHTML) + parseInt(qian1.innerHTML);

    shuliang.innerHTML = parseInt(shuliang.innerHTML) + 1;


}

var xiang = document.getElementById("xiang");
xiang.onfocus = function() {
    xiang.style.height = 200 + "px";
    xiang.style.rows = 20;
}
xiang.onblur = function() {
    xiang.style.height = 20 + "px";
    xiang.style.rows = 20;
}
