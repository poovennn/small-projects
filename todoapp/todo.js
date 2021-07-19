var input = document.getElementById('input')
var ul = document.getElementById('ul')
var sub = document.getElementById('submit')


sub.addEventListener('click', ()=>{
    // let value = input.value;
    // if(value !=0 ){
    //     let li= document.createElement('li')
    
    //   let button = document.createElement('button')
    //   button.innerHTML = 'delete'
    //   let id = Math.floor(Math.random()*100000 ) 
    //   li.setAttribute('id', id)
   
    //   button.addEventListener('click', ()=>{
    //   document.getElementById(li.id).remove();
    //   console.log(li.id)
    //   })
    //   li.appendChild(document.createTextNode(value));
    //   li.appendChild(button);
    //   ul.appendChild(li);
    //   input.value=''
    //   input.focus();
    //   }
    if(input.value != ''){
       create(input.value); 
    }
    

    
})

var xy = JSON.parse(localStorage.getItem('name'))
console.log(xy)
for (let data of xy){
    create(data);
}


function create(value){
    // let value = input.value;
    if(value !=0 ){
        let li= document.createElement('li')
    
      let button = document.createElement('button')
      button.innerHTML = 'delete'
      let id = Math.floor(Math.random()*100000 ) 
      li.setAttribute('id', id)
      li.setAttribute('class','li')
      button.setAttribute('class','btn')
   
      button.addEventListener('click', ()=>{
      document.getElementById(li.id).remove();
      var str = li.textContent; 
      var text = str.substr(0,str.length-6)
      let index = xy.indexOf(text,0)
      console.log(index)
      xy.splice(index);
      localStorage.setItem('name',JSON.stringify(xy))


      })
      li.appendChild(document.createTextNode(value));
      li.appendChild(button);
      ul.appendChild(li);
      if(localStorage.getItem('name')== ''){
          localStorage.setItem('name',"[]")

      }
      if(localStorage.getItem('name')){
         let  local = JSON.parse(localStorage.getItem('name'))
          local.push(input.value)
          localStorage.setItem('name',JSON.stringify(local));
      }
      input.value=''
      input.focus();
      }
      

    }


////////////display in table////

var table = document.getElementById('table')
var iname = document.getElementById('name')
var iitem = document.getElementById('item')
var iamount = document.getElementById('amount')
var sbtn = document.getElementById('sbtn')


sbtn.addEventListener('click',()=>{
    let x = iname.value;
    let y = iitem.value;
    let z = iamount.value;
    // createvalue(x,y,z)
    createvalue(x,y,z);
    
})


function createvalue (x,y,z){
    if(x!='' & y!='' & z!=''){
        var tr = document.createElement('tr')
    var name = document.createElement('td')
    var item = document.createElement('td')
    var amount = document.createElement('td')
    name.innerText= x;
    item.innerText= y;
    amount.innerText= z;
    
    tr.appendChild(name)
    tr.appendChild(item)
    tr.appendChild(amount)
    table.appendChild(tr);
    iname.value=''
    iitem.value=''
    iamount.value=''
    iname.focus();
    }
    

}




/////////////////vowel counter//////////////
var arr = ['a','e','i','o','u']
var vowel = document.getElementById('vowel')
var vinput = document.getElementById('voweloutput')
var vsub = document.getElementById('vsub')
var vowel
vsub.addEventListener('click',()=>{
    vowelfn(vowel.value, arr)
})

function vowelfn(str,letter){
    var count = 0;
    for(let i= 0; i< str.length; i++){
        if(str.charAt(i) == letter[0] || str.charAt(i)==letter[1] ||str.charAt(i)==letter[2] ||str.charAt(i)==letter[3] ||str.charAt(i)==letter[4] ){
            count += 1;
        }
    }
    vinput.innerText = count;
};
var arr = ['a','e','i','o','u']

