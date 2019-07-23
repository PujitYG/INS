var ele=document.getElementsByClassName("drum");

for(var i=0;i<ele.length;i++){
  ele[i].addEventListener("click",dothis);
  ele[i].addEventListener("mousedown",dothat);
  ele[i].addEventListener("mouseup",doths);
}

function dothat(){
  this.classList.add("w-i");
}
function doths(){
  this.classList.remove("w-i");
}

function dothis(event){
  var audio;
  var char=this.innerText;
  if(char==='w'){
    audio=new Audio('sounds/tom-1.mp3');
    audio.play();
  }else if(char==='a'){

  }
}

var i;
var j;
function delay(){
  for(i=0;i<100000;i++){
    for(j=0;j<1000;j++){}
  }
}
