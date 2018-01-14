/**
 * Created by 晓霞 on 2017/9/18.
 */
(function(){
    window.onload=function(){
        function cla(a){
            return document.getElementsByClassName(a);
        }
        function id(a){
            return document.getElementById(a);
        }
        (function(){
            var nav=cla('nav')[0],
                ul=nav.children[0],
                cot=nav.children[1],
                start= 0,move= 0,distance= 0,left= 0,Cleft=0,
                cha=ul.offsetWidth-nav.offsetWidth,
                Ccha=nav.offsetWidth-cot.offsetWidth;
            console.log(Ccha);
            nav.addEventListener('touchstart',function(e){
                    start= e.touches[0].pageX;
                    left=ul.offsetLeft;
                    cot.style.opacity=1;
                    Cleft=cot.offsetLeft;
                console.log(Cleft);
            });
                nav.addEventListener('touchmove',function(e){
                   move= e.touches[0].pageX;
                    distance=move-start;
                    ul.style.left=left+distance+'px';
                    cot.style.left=Cleft-distance+'px';
                    console.log(cot.style.left);
                    if(parseInt(ul.style.left)>0){
                        ul.style.left=0;
                    }
                    if(parseInt(ul.style.left)<-cha){
                        ul.style.left=-cha+'px';
                    }
                    if(parseInt(cot.style.left)<0){
                        cot.style.left=0;
                    }
                    if(parseInt(cot.style.left)>Ccha){
                        cot.style.left=Ccha+'px';
                    }
                });
                nav.addEventListener('touchend',function(e){
                    cot.style.opacity=0;
                })
        })();
        (function(){
            var resizeEvt='orientationchange' in window ? 'orientationchange':'resize',
                banner=cla("banner_wrap")[0],
                ul=banner.children[0],
                ol=banner.children[1],
                lis=ul.children,
                ww=lis[0].children[0].offsetWidth,
                len=lis.length,
                index= 1,k= 0,start= 0,move= 0,end= 0,distance= 0,
                fa=true;
            window.addEventListener(resizeEvt,function(){
                ww=lis[0].children[0].offsetWidth;
            });
            var timer=setInterval(next,3000);
            banner.addEventListener("touchstart",function(e){
                start= e.touches[0].pageX;
                clearInterval(timer);
            });
            banner.addEventListener("touchmove",function(e){
                move= e.touches[0].pageX;
                distance=move-start;
                ul.style.transition="left 0.5s linear 0s";
                ul.style.left=-index*ww+distance+'px';
            });
            banner.addEventListener("touchend",function(e){
                end= e.changedTouches[0].pageX;
                var cha=end-start;
                if(cha>1/3*ww && fa==true){
                    fa=false;
                    prev();
                }else if(cha<-1/3*ww && fa==true){
                    fa=false;
                    next();
                }else{
                    animate();
                }
                timer=setInterval(next,3000);
            });
            ul.addEventListener("transitionend",function(){
                if(index<=0){
                    index=len-2;
                }else if(index>=len-1){
                    index=1;
                }
                ul.style.transition='none';
                ul.style.left=-index*ww+'px';
                fa=true;
            });
            function animate(){
                ul.style.transition="left 0.5s linear 0s";
                ul.style.left=-index*ww+'px';
            }
            function prev(){
                index--;
                animate();
                k--;
                if (k < 0) {
                    k = len-3;
                    ol.children[k].className = "col";
                    ol.children[0].className = "";
                } else {
                    ol.children[k].className = "col";
                    ol.children[k + 1].className = "";
                }

            }
            function next(){
                index++;
                animate();
                k++;
                if (k > len-3) {
                    k = 0;
                    ol.children[k].className = "col";
                    ol.children[len-3].className = " ";
                } else {
                    ol.children[k].className = "col";
                    ol.children[k - 1].className = " ";
                }

            }
        })();
        (function(){
            setInterval(function(){
                timer(20)
            },1000);

            function timer(number){
                var time=new Date();
//        console.log(time);
                /*获取系统的时间*/

                var h=time.getHours();
                var m=time.getMinutes();
                var s=time.getSeconds();
                /*从中把时分秒提取出来*/
                var end=number*60*60;
                /*知道要结束的时间并换算成秒*/
                var start=h*60*60+m*60+s;
                /*把系统提取的当前时间转换成秒*/
                var cha=end-start;
                /*拿未来的时间减去现在的时间，剩下的就是剩余的时间*/
                var  hh=parseInt(cha/3600);
                var  mm=parseInt(cha%3600/60);
                var  ss=parseInt(cha%3600%60);
                var spans=document.querySelectorAll("span");
                spans[0].innerHTML=hh;
                spans[2].innerHTML=mm;
                spans[4].innerHTML=ss;
            }
        })();
    }
})();