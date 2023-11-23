var speed=10; //数字越大速度越慢
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;
function marquee()
{
  if(tab2.offsetWidth-tab.scrollLeft<=0) 
  tab.scrollLeft-=tab1.offsetWidth  
  else{tab.scrollLeft++;}
}
var myMar=setInterval(marquee,speed);
tab.onmouseover=function() {clearInterval(myMar)};
tab.onmouseout=function() {myMar=setInterval(marquee,speed)};