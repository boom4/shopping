/**
 * Created by lenovo on 2016/11/11.
 */
(function(){
    var t1 = document.getElementById('t1');
    var t2 = document.getElementById('t2');
    var t3 = document.getElementById('t3');
    var t4 = document.getElementById('t4');
    var spdt = document.getElementById('spdt');
    var j = document.getElementById('j');
    var s = document.getElementById('s');
    t1.onmouseover = function(){
        spdt.src="../img/t1.png"
    }
    t2.onmouseover = function(){
        spdt.src="../img/t2.png"
    }
    t3.onmouseover = function(){
        spdt.src="../img/t3.png"
    }
    t4.onmouseover = function(){
        spdt.src="../img/t4.png"
    }
    j.onclick = function(){
        location.href='ShopPage.html';
    }
    s.onclick = function(){
        location.href='CollectGoods.html';
    }
    document.getElementById('l1').onclick = function(){
        if (document.getElementById('l2').style.display=='none'||document.getElementById('l3').style.display=='none'){
            document.getElementById('l2').style.display='block';
            document.getElementById('l3').style.display='block';
        }else{
            document.getElementById('l2').style.display='none';
            document.getElementById('l3').style.display='none';
        }
    }
    document.getElementById('l5').onclick = function(){
        if (document.getElementById('l6').style.display=='none'){
            document.getElementById('l6').style.display='block';
        }else{
            document.getElementById('l6').style.display='none';
        }
    }
    document.getElementById('l8').onclick = function(){
        if (document.getElementById('l9').style.display=='none'){
            document.getElementById('l9').style.display='block';
        }else{
            document.getElementById('l9').style.display='none';
        }
    }
    document.getElementById('l10').onclick = function(){
        if (document.getElementById('l11').style.display=='none'){
            document.getElementById('l11').style.display='block';
        }else{
            document.getElementById('l11').style.display='none';
        }
    }
    document.getElementById('l13').onclick = function(){
        if (document.getElementById('l14').style.display=='none'){
            document.getElementById('l14').style.display='block';
        }else{
            document.getElementById('l14').style.display='none';
        }
    }
    document.getElementById('l16').onclick = function(){
        if (document.getElementById('l17').style.display=='none'){
            document.getElementById('l17').style.display='block';
        }else{
            document.getElementById('l17').style.display='none';
        }
    }
    document.getElementById('l18').onclick = function(){
        if (document.getElementById('l19').style.display=='none'){
            document.getElementById('l19').style.display='block';
        }else{
            document.getElementById('l19').style.display='none';
        }
    }
}(window));