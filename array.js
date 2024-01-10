const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["brown","purple","pink","blue","lavender","orange","cyan"];
const color2=["silver","pink","yellow","green","orange","lavender","white"];
body.style.backgroundColor="green";

document.querySelector("button").addEventListener("click",function(){
const colorIndex=parseInt(Math.random()*color.length);
body.style.backgroundColor=color[colorIndex];
const colorIndex2=parseInt(Math.random()*color2.length);
button.style.backgroundColor=color2[colorIndex2];
});