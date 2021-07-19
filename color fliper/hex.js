var btn = document.getElementById('btn')
var body = document.getElementById('div')
var display = document.getElementById('colorname')
btn.addEventListener('click', ()=>{
    let color = '#'
    let num = Math.random().toString(15).slice(2,8);
    color+= num;
    body.style.backgroundColor = color;
    display.innerText= color;
});


// var arr =["White","Black", "Grey", "Yellow", "Red", "Blue", "Green", "Brown", "Pink", "Orange", "Purple"];
// btn.addEventListener('click',()=>{
//     let i = Math.floor(Math.random()*11);
//     body.style.backgroundColor = arr[i];
//     display.innerText=arr[i];
    
// }) 