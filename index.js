let cnt=0;
let txt=document.getElementById("txt");
let inc=document.getElementById("cnt");
function increment(){
    cnt=cnt+1;
    inc.textContent=cnt;
}

function save(){
    let str=cnt+" - ";
    txt.innerText+=str;
    inc.textContent=0;
    cnt=0;
}