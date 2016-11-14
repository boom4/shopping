
    var check = document.getElementById("check");
    var btn_denglu = document.getElementById("btn_denglu");
    var div_denglu = document.getElementById("div_denglu");
    var huoqu = document.getElementById('huoqu');
    var Tel = document.getElementById('sjhm');
    var yzm = document.getElementById('yanzhengma');
    var qrmm = document.getElementById('qrmm');
    var UserPwd = document.getElementById('szmm');
    var userName = document.getElementById('yhm');

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

    var url = "http://127.0.0.1:3000/";

    var yanz_num;

    huoqu.onclick = function () {
        var phonenum = Tel.value;
        var myreg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
        if (!myreg.test(phonenum)) {
            alert('请输入有效的手机号码！');
        } else {
            yanz_num = parseInt(Math.random() * 900000 + 100000);
            alert(yanz_num);
        }
    };

    yzm.onblur = function () {
        if (yzm.value == yanz_num) {

        }
        else {
            alert('验证码错误！')
        }
    };

    qrmm.onblur = function (){
        if (UserPwd.value == qrmm.value) {}
        else {
            alert('两次密码不一致！')
        }
    };

    btn_denglu.onclick = function () {
        console.log(userName.value);
        console.log(UserPwd.value);
        console.log(Tel.value);
        $.post(url+'reg',{
            tel:Tel.value,
            username:userName.value,
            password:UserPwd.value
        },function (data,status) {
            console.log(data);
            if(data.result) {
                alert("注册成功");
                location.href='../denglu/denglu.html'
            }else {
                alert("注册失败");
            }
        });
    };




