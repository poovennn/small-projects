var btn = document.getElementsByClassName("number")
var clear = document.getElementById("c")
var backspace = document.getElementById("ce")
var equal = document.getElementById("=")
var output2 = document.getElementById("historyvalue");
var output = document.getElementById("outputvalue");


for(let i= 0; i<btn.length ;i++){
    btn[i].addEventListener('click',()=>{
        var value = btn[i].id
        output.innerText += value;
     })
}

clear.addEventListener('click',()=>{
    output.innerText= ''
    output2.innerText=''
})

backspace.addEventListener('click',()=>{
    let x = output.innerText.toString();
    let arr = x.substr(0,x.length-1);
    output.innerText= arr;
})
equal.addEventListener('click', ()=>{
    let x = output.innerText;
    let value = eval(x);
    output2.innerHTML= value;
    console.log(value)
})