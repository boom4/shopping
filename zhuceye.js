var check = document.getElementById("check");
var btn_denglu = document.getElementById("btn_denglu");
var div_denglu = document.getElementById("div_denglu");

function che() {
    if (check.checked) {
        div_denglu.style.display = "none";
        btn_denglu.style.backgroundColor = "red";
    } else {
        div_denglu.style.display = "block";
        btn_denglu.style.backgroundColor = "gray";
    }
}
che();
