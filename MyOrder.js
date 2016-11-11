/**
 * Created by lenovo on 2016/11/11.
 */

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