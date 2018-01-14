/**
 * Created by 晓霞 on 2017/10/3.
 */
(function(){
    window.onload=function(){
            (function(){
        function cla(a) {
            return document.getElementsByClassName(a);
        }
        function id(a){
            return document.getElementById(a);
        }
        var btn=id('btn_quick_login'),user=id('username'),password=id('password');
        btn.addEventListener('touchstart',function(e){
            var xhr=new XMLHttpRequest();
            xhr.open("post","ind.php");
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send("user="+user.value+"&password="+password.value);
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        var kk=xhr.responseText;
                        console.log(kk);
                        if(kk==0){
                            alert("账号或者密码错误");
                        }else{
                            window.location="index.html";
                        }
                    }
                }
            }
        })
    })();

    }
})();