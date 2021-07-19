var boxes = document.getElementsByClassName("btn");
var boxarr = Array.from(boxes)
console.log(boxarr)
console.log(boxarr)
var palyer1 = 'O'
var player2 = 'x'
var current = palyer1;
var arr = [];
let player = document.getElementById("player")

for(let data of boxes){
    data.addEventListener("click",()=>{
         var id = data.id;
         let elem = document.getElementById(id)
         elem.innerText = current;
         arr[id] = current;
         console.log(arr);
        //  if(current == palyer1){
        //      current = player2;
        //  }else{
        //      current = palyer1
        //  }
        if(playerwon()){}
        current = current === palyer1 ? player2 :palyer1

         
    });
 }


function playerwon(){
  
    if(arr[0] == current){
        if(arr[1] == current & arr[2] == current){
            player.innerText = current + " YOU WON"
            return true;
        }
        if(arr[3] == current & arr[6]==current){
            player.innerText = current + " YOU WON"
            return true;
        }
        if(arr[4] == current & arr[8]==current){
            player.innerText = current + " YOU WON" 
            return true;
        }
    }
    if(arr[8] == current){
        if(arr[5] == current & arr[2] == current){
            player.innerText = current + " YOU WON"
            return true;
        }
        if(arr[7] == current & arr[6]==current){
            player.innerText = current + " YOU WON"
            return true;
        }
        // if(arr[4] == current & arr[8]==current){
        //     player.innerText = current + " YOU WON"
        // }
    }
    if(arr[4] == current){
        if(arr[3] == current & arr[5] == current){
            player.innerText = current + " YOU WON"
            return true;
        }
        if(arr[7] == current & arr[1]==current){
            player.innerText = current + " YOU WON"
            return true;
        }
        // if(arr[4] == current & arr[8]==current){
        //     player.innerText = current + " YOU WON"
        // }
    }
 
}

var restart = document.getElementById("reset");
restart.addEventListener("click",()=>{
    arr.forEach((data,index)=>{
        arr[index] = null;

    });
    boxarr.forEach((data)=>{
        data.innerText =  ''

    })
});