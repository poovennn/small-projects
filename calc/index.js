var c = document.getElementById('c');
var ce = document.getElementById('ce');
var percent = document.getElementById('%');
var add = document.getElementById('+');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var sub = document.getElementById('-');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var multiply = document.getElementById('x');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var divide = document.getElementById('/');
var empty = document.getElementById('empty');
var zero = document.getElementById('0');
var empty = document.getElementById('empty');
var outputvalue = document.getElementById('outputvalue')
var historyvalue = document.getElementById('historyvalue')




function gethistory(){
    return historyvalue.innerText;
}

function printhistory(num){
    return historyvalue.innerText=num;

}

function getoutput(){
    return outputvalue.innerText;
}

function printoutput(num){
    if(num == ''){
        printoutput.innerText =''
    }else{
        return outputvalue.innerText=format(num);
    }
}

function format(num){
    let n = Number(num)
    let value = n.toLocaleString("en")
    return value;
      
}

function reverseformat(num){
    let value = Number(num.replace(/,/g, ''));
    return value;
    
}

var operators = document.getElementsByClassName('operator')

var numbers= document.getElementsByClassName('number')


for(i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click', function(){
        var output = reverseformat(getoutput());
        if(output!= NaN){
            output = output +this.id;
            printoutput(output);
        }
    })
};

